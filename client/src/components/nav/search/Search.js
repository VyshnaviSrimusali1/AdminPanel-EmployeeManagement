import axios from "axios";
import { useSearch } from "../../../context/search";
import { useNavigate } from "react-router-dom";

export default function Search() {
    const [values, setValues] = useSearch(); // Use context instead of local state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(
                `http://localhost:3000/api/employees/search/${values.keyword}`
            );
            setValues({ ...values, results: data });
            navigate("/search");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
            <input
                type="search"
                className="form-control"
                placeholder="Search"
                onChange={(e) => setValues({ ...values, keyword: e.target.value })} // Update context
                value={values.keyword} // Use context value
            />
            <button className="btn btn-outline-success" type="submit">
                Search
            </button>
        </form>
    );
}
