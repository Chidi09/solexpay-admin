import { defineEventHandler, getHeaders, getRouterParam, createError } from 'h3';
import { assertUuid } from '../../../../utils/validate';
import { IS_DEV } from '../../../../utils/dev-mock';

export default defineEventHandler(async (event) => {
  const { authorization } = getHeaders(event);
  if (!authorization) throw createError({ statusCode: 401, message: 'Unauthorized' });

  const id = assertUuid(getRouterParam(event, 'id'));

  if (IS_DEV) return { success: true, id };

  const res = await fetch(`${process.env['API_URL']}/admin/users/${id}/reactivate`, {
    method: 'POST',
    headers: { Authorization: authorization },
  });

  if (!res.ok) throw createError({ statusCode: res.status, message: await res.text() });
  return res.json();
});
