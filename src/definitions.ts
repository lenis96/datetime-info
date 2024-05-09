export interface DateTimeInfoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
