import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const  client = createClient({
    projectId: 'a4by62kq',
    dataset: 'production',
    apiVersion: "2023-03-12",
    useCdn: true,
    token: "skyeURd2QgnOVExDZIwmUge7GHLYUz2fpm0sUU2dtCGDzDIVkIu5DU40HKTY71eZvxys27G3fbVMpwIre4nIiVDKobsuQiYIc70bL00Ikkg3kmxvrsrsxd9w3IDEsqkux1xTKIV1CYUvWRl9xgItwTYj919S3Gvj0rkwSKdKOyWWmozrSUa5"
})

const builder = imageUrlBuilder(client);

export const urlFor = (source)=>builder.image(source);