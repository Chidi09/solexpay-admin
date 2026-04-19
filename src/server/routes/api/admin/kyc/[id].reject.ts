import { defineEventHandler, getHeaders, getRouterParam, readBody, createError } from 'h3';
import { assertUuid, assertNonEmptyString } from '../../../../utils/validate';
import { IS_DEV } from '../../../../utils/dev-mock';

export default defineEventHandler(async (event) => {
  const { authorization } = getHeaders(event);
  if (!authorization) throw createError({ statusCode: 401, message: 'Unauthorized' });

  const id = assertUuid(getRouterParam(event, 'id'));
  const body = await readBody(event);
  const reason = assertNonEmptyString(body?.reason, 'reason', 512);

  if (IS_DEV) return { success: true, id, reason };

  const res = await fetch(`${process.env['API_URL']}/admin/kyc/${id}/reject`, {
    method: 'POST',
    headers: { Authorization: authorization, 'Content-Type': 'application/json' },
    body: JSON.stringify({ reason }),
  });
  if (!res.ok) throw createError({ statusCode: res.status, message: await res.text() });
  return res.json();
});
