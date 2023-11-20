declare module "tonelog" {
  const tone: ColorFunctions;

  const toneLevel: logLevels;

  const typed: (
    strings?: any[],
    delay?: number,
    typeSpeed?: number,
    backspaceSpeed?: number
  ) => Promise<any>;

  const useTimestamp: (message: any) => string;

  function tonelog(color: any, message: any): void
}
