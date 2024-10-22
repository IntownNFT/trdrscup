export type ActionState =
  | { status: 'success'; data: Record<string, unknown> }
  | { status: 'error'; message: string };