// import { User } from "@/types"; // Assuming you have defined User interface in '@/types'
import { INavLink } from "@/types";
import { navLinks } from "../data/navlinks";

// const fetchUsers = async (): Promise<User[]> => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     return response.json();
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return []; // or handle error as needed
//   }
// };

// export default fetchUsers;

const getNavLinks = async (): Promise<INavLink[]> => {
  try {
    const response = navLinks;
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // or handle error as needed
  }
};

export default getNavLinks;
