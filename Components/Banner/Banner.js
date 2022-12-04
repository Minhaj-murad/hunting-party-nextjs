

const Banner = () => {
    return (
        <div>
            <div className="navbar  text-white">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">HUNTING PARTY</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>Log in</a></li>
                        <li><a>Catagories</a></li>
                        
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;