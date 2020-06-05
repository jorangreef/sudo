export function exec(cmd: string,
        options?: ((error?: Error, stdout?: string | Buffer, stderr?: string | Buffer) => void)
                | { name?: string, icns?: string, env?: { [key: string]: string } },
        callback?: (error?: Error, stdout?: string | Buffer, stderr?: string | Buffer) => void): void;

// NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
namespace exec {
  function __promisify__(command: string): PromiseWithChild<{ stdout: string; stderr: string }>
  function __promisify__(
    command: string,
    options: { encoding: 'buffer' | null } & ExecOptions
  ): PromiseWithChild<{ stdout: Buffer; stderr: Buffer }>
  function __promisify__(
    command: string,
    options: { encoding: BufferEncoding } & ExecOptions
  ): PromiseWithChild<{ stdout: string; stderr: string }>
  function __promisify__(
    command: string,
    options: ExecOptions
  ): PromiseWithChild<{ stdout: string; stderr: string }>
  function __promisify__(
    command: string,
    options?: ({ encoding?: string | null } & ExecOptions) | null
  ): PromiseWithChild<{ stdout: string | Buffer; stderr: string | Buffer }>
}
