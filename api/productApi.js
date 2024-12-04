import { baseURL } from "../middleware/baseUrl.js";

console.log(baseURL());

export const productApi = {
    // create: async (data) => {
    //     try {
    //         let req = await fetch(`${baseURL()}/product/`, {
    //             method: "POST",
    //             headers: {
    //                 "content-type": "application/json",
    //                 // "Authorization": `Bearer ${token}`
    //             },
    //             body: JSON.stringify(data)
    //         });
    //         if (!req.ok) {
    //             throw new Error("Failed to create product");
    //         }
    //         let res = await req.json();
    //         res.send(data);
    //     } catch (error) {
    //         console.error("Error during product creation:", error.message);
    //     }
    // },
    create: async (data) => {
        try {
          let product = await fetch(`${baseURL()}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${getToken()}`,
            },
            body: data,
          });
          let res = await product.json();
          return res;
        } catch (error) {
          console.log(error);
        }
      },
    getAllProducts:async()=>{
        try {
            let req = await fetch(`${baseURL()}/product/all`, {
                method: "GET",
                headers: {
                    // "Authorization": `Bearer ${token}`
                }
            });
            if (!req.ok) {
                throw new Error("Failed to fetch products");
            }
            let res = await req.json();
            return res;
        } catch (error) {
            console.error("Error during fetching products:", error.message);
        }
    }
}

