import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    console.log(name, email);
  };

  return (
    <div>
      <h2>Update information of {loadedUser.name}</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          defaultValue={loadedUser?.name}
          id=""
          placeholder="name"
        />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedUser?.email}
          id=""
          placeholder="email"
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
