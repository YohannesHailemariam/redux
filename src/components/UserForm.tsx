export const UserForm = () => {

    return <form>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
        </div>

        <div>
            <label htmlFor="username">Email</label>
            <input type="text" id="email" />
        </div>

        <button>Save</button>
    </form>
}