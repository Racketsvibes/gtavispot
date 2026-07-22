// Fallback stub for backend-foundation when building on Vercel / CI without local backend files.
const createStubApp = () =>
  new Proxy(
    {},
    {
      get: (_target, _prop) => {
        // Return async function that resolves to null or empty list for any method invocation
        return async (..._args: any[]) => null;
      },
    }
  );

export const characterApplication: any = createStubApp();
export const locationApplication: any = createStubApp();
export const vehicleApplication: any = createStubApp();
export const weaponApplication: any = createStubApp();
export const businessApplication: any = createStubApp();
export const mediaApplication: any = createStubApp();
export const newswireApplication: any = createStubApp();
export const searchApplication: any = createStubApp();
export const aiContextApplication: any = createStubApp();

export default createStubApp();
