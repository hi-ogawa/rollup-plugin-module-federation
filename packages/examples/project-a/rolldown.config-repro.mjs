import { defineConfig } from 'rolldown';

export default defineConfig({
  input: './src/repro.js',
  plugins: [
    // {
    //   name: "debug1",
    //   transform(code, id) {
    //     if (id.includes("/repro.js")) {
    //       console.log({ code, id });
    //       // this.resolve("react", id)
    //     }
    //   }
    // },
    {
      name: 'debug2',
      transform: {
        order: 'post',
        async handler(code, id) {
          if (id.includes('/repro.js')) {
            console.log({ code, id });
            // this.resolve("react", id)
          }
        },
      },
    },
  ],
});
