const nav =()=>{
    return `
    <div id="navbar">
    <div class="left_nav">
        <div>email signup</div>
        <div >
        <svg id="hamburger" fill="white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg>
        </div>
        <div><input type="text" placeholder="SEARCH"></div>
    </div>
    <div class="mid_nav">
        <div>
            <h1>BOBBI  BROWN</h1>
        </div>
        <div>
            <ul id="nav_ul">
                <li>NEW</li>
                <li>FAVORITES</li>
                <li>MAKEUP</li>
                <li>SKINCARE</li>
                <li>MINI BAR</li>
                <li>OFFERS</li>
                <li>VIRTUAL SERVICES</li>
                <li>DISCOVER</li>
            </ul>
        </div>
    </div>
    <div class="right_nav">
        <p>loc</p>
        <p>cart</p>
        <p>pro</p>
    </div>
</div>
    `
}

export default nav