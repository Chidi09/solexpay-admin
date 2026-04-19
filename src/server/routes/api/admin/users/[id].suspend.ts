import { defineEventHandler, getHeaders, getRouterParam, getQuery, createError } from 'h3';
import { assertUuid, assertNonEmptyString } from '../../../../utils/validate';
import { IS_DEV } from '../../../../utils/dev-mock';

export default defineEventHandler(async (event) => {
  const { authorization } = getHeaders(event);
  if (!authorization) throw createError({ statusCode: 401, message: 'Unauthorized' });

  const id = assertUuid(getRouterParam(event, 'id'));
  const { reason } = getQuery(event);
  const safeReason = reason
    ? assertNonEmptyString(reason, 'reason', 256)
    : 'Suspended by admin';

  if (IS_DEV) return { success: true, id, reason: safeReason };

  const res = await fetch(
    `${process.env['API_URL']}/admin/users/${id}/suspend?reason=${encodeURIComponent(safeReason)}`,
    { method: 'POST', headers: { Authorization: authorization } }
  );

  if (!res.ok) throw createError({ statusCode: res.status, message: await res.text() });
  return res.json();
});
