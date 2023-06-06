import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

// imgToken
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
            })

        console.log(data);
    };
    console.log(errors);

    // img hosting api
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    return (
        <div className="w-full px-10">
            <>
                <Helmet>
                    <title>
                        Bistro | Add Item
                    </title>
                </Helmet>
                <SectionTitle
                    subHeading="---What's new?---"
                    heading="ADD AN ITEM"
                ></SectionTitle>
            </>
            {/* form section start */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span
                            className="label-text font-semibold">
                            Recipe Name*
                        </span>
                    </label>
                    <input
                        className="input input-bordered w-full"
                        placeholder="Recipe Name"
                        type="text"
                        required
                        {
                        ...register("name",
                            {
                                required: true,
                                maxLength: 120
                            })
                        }
                    />
                </div>
                <div className="flex my-4">
                    {/* dropdown section start */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span
                                className="label-text">
                                Category*
                            </span>
                        </label>
                        <select
                            {
                            ...register("category",
                                {
                                    required: true
                                })
                            }
                            className="select select-bordered"
                            defaultValue="Pick One Item"
                        >
                            <option disabled>
                                Pick One Item
                            </option>
                            <option className="font-bold">
                                SALAD
                            </option>
                            <option className="font-bold">
                                PIZZA
                            </option>
                            <option className="font-bold">
                                SOUP
                            </option>
                            <option className="font-bold">
                                DESSERTS
                            </option>
                            <option className="font-bold">
                                DRINKS
                            </option>
                        </select>
                    </div>
                    {/* dropdown section end */}
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span
                                className="label-text font-semibold">
                                Price*
                            </span>
                        </label>
                        <input
                            className="input input-bordered w-full"
                            placeholder="Type here"
                            type="number"
                            {
                            ...register("price",
                                {
                                    required: true
                                })
                            }
                            required />
                    </div>
                </div>
                {/* text area section start */}
                <div className="form-control">
                    <label className="label">
                        <span
                            className="label-text">
                            Recipe Details*
                        </span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered h-24"
                        {
                        ...register("recipe",
                            {
                                required: true
                            })
                        }
                        placeholder="Bio"
                        required >
                    </textarea>
                </div>
                {/* photo upload */}
                <div className="form-control w-full max-w-xs my-4">
                    <label className="label">
                        <span
                            className="label-text">
                            Item Image*
                        </span>
                    </label>
                    <input
                        type="file"
                        className="file-input file-input-bordered file-input-warning w-full"
                        {
                        ...register("image",
                            {
                                required: true
                            })
                        }
                    />
                </div>
                <input
                    className="btn btn-sm mt-4"
                    type="submit"
                    value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;