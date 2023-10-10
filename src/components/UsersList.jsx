import { useEffect } from "react";
import { fetchUsers } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";

function UsersList() {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (state.isLoading) return <div>Loading...</div>;
  if (state.error) return <div>{state.error}</div>;
  return (
    <ul>
      {state?.data?.map((user, index) => {
        return <li key={index}>{user.name}</li>;
      })}
    </ul>
  );
}

export default UsersList;
