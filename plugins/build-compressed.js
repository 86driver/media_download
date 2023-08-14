export const buildCompressed = () => {
  return {
    name: "build-compressed",
    enforce: "post",
    apply: "build",
    buildEnd() {
        console.log('build-compressed start...')

    }
  };
};