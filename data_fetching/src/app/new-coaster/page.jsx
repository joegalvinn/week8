import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as React from "react";
import PopoverDemo from "../components/PopoverDemo";

export default function NewCoasterPage() {
  //we want to submit the form data to our database
  //you need to set up your databaseconnection string first
  //we need to handle the submit action
  async function handleSubmit(formValues) {
    //we need to make this action asynchronous
    //we need to specify this is a server action
    "use server";
    //get the form values from the inputs
    //i suggest you store your input values in one object
    //the properties of my formValues object are the name attributes in the inputs
    const formData = {
      coaster_name: formValues.get("coaster_name"),
      location: formValues.get("location"),
      height: formValues.get("height"),
    };
    console.log(formData);
    //i cannot use the Object constructor here because it is only available in the client

    //we need to query the db to add the new form alues to the table
    //we need to use db --> its in my utils
    await db.query(
      `INSERT INTO coasterrollers (coaster_name, location, height)
    VALUES ($1, $2, $3)`,
      [formData.coaster_name, formData.location, formData.height]
    );

    revalidatePath("/about");
    redirect("/about");
  }

  return (
    <div>
      <div className="bg-orange-600 text-white">
        <h1>&quot;Add&quot; a new coaster roller to the family</h1>

        {/* by adding attributes to our form we are ensuring the data is as valuable as possible - form validation */}
        <form action={handleSubmit} className="flex flex-col items-center">
          <label htmlFor="coaster_name">Write the name of your coaster:</label>
          <input
            type="text"
            name="coaster_name"
            id="coaster_name"
            required
            className="bg-amber-500 text-white"
          />

          <label htmlFor="location">
            Write the location your coaster came from:{" "}
          </label>
          <input
            type="text"
            name="location"
            id="location"
            required
            className="bg-amber-500 text-white"
          />

          <label htmlFor="height">Write the height of your coaster: </label>
          <input
            type="int"
            name="height"
            id="height"
            required
            min={1}
            step={1}
            className="bg-amber-500 text-white"
          />
          <button
            type="submit"
            className=" bg-orange-800 border-amber-400 border-4 rounded-sm"
          >
            Submit coaster
          </button>
        </form>
      </div>
      <div>
        <PopoverDemo />
      </div>
    </div>
  );
}
