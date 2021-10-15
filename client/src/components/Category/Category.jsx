export default function Category(props) {
    const {
        handleSubmit,
        setCategory,
    } = props;

    return (
        <form className="sort-container" onSubmit={e => handleSubmit(e)}>
            <label htmlFor="sort">GENDER:</label>
            <select className="sort" onChange={e => setCategory(e.target.value)}>
                <option className="option" value="all">
                  &nbsp; All &nbsp;
                </option>
                <option value="unisex">
                  &nbsp; Unisex &nbsp;
                </option>
                <option value="male">
                  &nbsp; Male &nbsp;
                </option>
                <option value="female">
                  &nbsp; Female &nbsp;
                </option>
            </select>
        </form>
    )
}
