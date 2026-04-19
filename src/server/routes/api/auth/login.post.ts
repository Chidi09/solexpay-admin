import { defineEventHandler, readBody, createError } from 'h3';
import { assertEmail, assertPassword } from '../../../utils/validate';
import { IS_DEV, MOCK } from '../../../utils/dev-mock';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const email = assertEmail(body?.email);
  const password = assertPassword(body?.password);

  if (IS_DEV) return MOCK.login;

  const res = await fetch(`${process.env['API_URL']}/auth/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw createError({ statusCode: res.status, message: await res.text() });
  return res.json();
});
