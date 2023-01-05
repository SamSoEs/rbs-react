import React from 'react';
import { useForm } from 'react-hook-form';

const rentalOptions = ['apartment', 'condo', 'house'];

const RentalForm = ({ onSubmit }) => {

    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    {...register("title", { required: true })}
                    type="text"
                    className="form-control"
                    id="title" />
            </div>

            <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                    {...register("city", { required: true })}
                    type="text"
                    className="form-control"
                    id="city" />
            </div>

            <div className="form-group">
                <label htmlFor="street">Street</label>
                <input
                    {...register("street", { required: true })}
                    type="text"
                    className="form-control"
                    id="street" />
            </div>

            <div className="form-group">
                <label htmlFor="category">Category</label>

                <select
                    {...register("category", { required: true })}

                    className="form-control"
                    id="category">
                    {
                        rentalOptions.map(option =>
                            <option key={option}>{option}</option>
                        )
                    }
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="bedrooms">Image Url</label>
                <input
                    {...register("image", { required: true })}
                    type="text"
                    className="form-control"
                    id="image" />
            </div>

            <div className="form-group">
                <label htmlFor="bedrooms">Rooms</label>
                <input
                    {...register("numOfRooms", { required: true })}
                    type="number"
                    className="form-control"
                    id="numOfRooms" />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    {...register("description", { required: true })}
                    rows="5"
                    type="text"
                    className="form-control"
                    id="description">
                </textarea>
            </div>

            <div className="form-group">
                <label htmlFor="dailyRate">Daily Price</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                    </div>
                    <input
                        {...register("dailyPrice", { required: true })}

                        type="number"
                        className="form-control"
                        id="dailyPrice" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="shared">Shared</label>
                <input
                    {...register("shared", { required: true })}
                    type="checkbox"
                    className="form-control"
                    id="shared" />
            </div>
            <button
                type="submit"
                className="btn btn-bwm-main">Create
            </button>
        </form>
    )
}

export default RentalForm;