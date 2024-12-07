import React from 'react';
import profilePic from "./saenoooos.svg";

function Queens() {
    React.useEffect(() => {       window.scrollTo(0, 0);     }, []);
    return (


        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <div className="project-banner-wrapper">
                <img src="projects/8queens/banner.jpg"/>
            </div>

            <div className="project-description-container">
                <div className="title-wrapper">
                    <img src="saenoooos.png"/>
                    <h1>Using Vanilla Minecraft to create a working 8-Queen Solver</h1>
                </div>

                <div className="content-wrapper">

                    <p>
                        <strong>25 JUN 2023</strong></p>
                    <p>
                        <em>This project is still a work in progress. I will update back here when it&#39;s
                            complete!</em>
                    </p>

                    <p>My goal for this project was not simply to create the 8-Queens problem. I have done this before
                        in
                        Java and it is not difficult, with hundreds of examples available online. I wanted to create a
                        working 8-Queen solver using Minecraft&#39;s built in mechanics and without the use of
                        additional
                        plugins. Everything would be run inside of native command blocks, making use of scoreboards and
                        command block execution only.
                    </p>

                    <h2>What is the 8-Queens Problem?</h2>
                    <p>
                        <img src="projects\8queens\Pasted%20image%2020230621061448.png" alt=""/><br/>
                        <em>A correct 8-Queens solution board</em></p>
                    <p>The 8-Queens Problem is a well known mathematical problem involving the use of an 8x8 chessboard
                        with eight queens placed on the grid at random positions.</p><p>The aim of the problem is to try
                    and use an optimised search technique to continuously tweak the positions of the queens until a
                    board layout is found where none of the queens are on the same horizontal, vertical or diagonal as
                    each other. Although this sounds easy in theory, there are roughly four billion possible
                    combinations of eight queens on a grid.</p><p>Only 92 of these combinations are actual solutions to
                    the problem.</p>
                    <p>Optimised search techniques can range from the highly advanced, probabilistic search functions
                        that take a wide range of input parameters, to the incredibly slow and lazy search methods such
                        as random reshuffling.</p>


                <h2>Experimenting with Large Problems</h2>

                <p>Within my server is a huge structure consisting of six giant 100x100x100 colour-coded spaces. This is
                    my &#39;idea lab&#39; or testing facility, an area locked to moderator access and separated from
                    finished builds to allow easy testing of different projects.</p>
                <p>
                    <img src="projects\8queens\Pasted%20image%2020230626194344.png" alt=""/>
                </p>
                <p>When designing the testing facility, I decided to dedicate an entire space exclusively to heuristic
                    search related problems - mainly because I&#39;m really interested in them. Since this is a
                    heuristic search related problem, we will use this space in order to create a prototype.</p>
                <p>
                    <img src="projects\8queens\Pasted%20image%2020230626195107.png" alt=""/>
                </p>
                <h2>Creating the grid</h2>
                <p>In order to create the grid we will need to use materials that are easy to distinguish, since we will
                    need to know the grid squares for future reference. I chose to use white concrete and light grey
                    concrete in the prototype, since these contrast against the dark grey background.</p>
                <p>
                    <img src="projects\8queens\Pasted%20image%2020230626200007.png" alt=""/>
                </p>
                <p>We will need to have eight queens positioned on the grid. The easiest way to achieve this was to
                    create eight armour stand entities and take note of the UUID values of each. These would then
                    function as &#39;queens&#39; that can be moved around the grid through the use of
                    the <code>/tp</code> command. </p>
                <p>
                    <img src="projects\8queens\Pasted%20image%2020230626200703.png" alt=""/>
                </p>
                <h2>Managing entities through UUIDs</h2>
                <p>Every entity created inside a world will have a <strong>unique user identifier</strong>,
                    or <strong>UUID</strong>. The UUID of an entity is a hex string that can be used in substitution of
                    a player name or tag. UUIDs can be found by autocompleting any command that makes use of a player
                    name while standing near the entity we want to manage. </p>
                <p>This is an incredibly useful feature since it allows any command that would typically take a player
                    name as input to take a UUID value instead, unlocking the use of these commands for entities in
                    addition to players.<br/><br/><img src="projects\8queens\Pasted%20image%2020230626202054.png"
                                                       alt=""/>
                </p>
                <h2>Determining Board Positions</h2>
                <p>There are numerous ways to attempt to represent an 8-queen board layout within a programming
                    language. The simplest way would be to represent it as a 2D boolean array,
                    where <code>true</code> represents a queen and <code>false</code> represents a blank. Or characters
                    can be used instead. </p>

                <p>However, this makes movement difficult since locating individual queens requires traversal of a two
                    dimensional plane. Doing this through e.g. a nested <code>for</code> loop would require lots of
                    memory space and take a long time, especially since we may be swapping queens for thousands of
                    iterations. </p>
                <p>Not only that, but it would be needlessly difficult to attempt to create a two dimensional array
                    plane inside of Minecraft when one already exists through in-game coordinates.</p>
                <p>Instead, we can limit our search area via reasonable assumptions and make use of bit representation
                    to determine the positions instead. This makes for a much better system and allows us to update
                    coordinates by simply changing a single bit.</p>
                <blockquote>
                    <p>Bit representation of an 8-queen board can be done by using a reasonable assumption that there
                        will never be two queens in the same row. This also eliminates a large number of incorrect
                        possibilities from our search space. Subsequently, it means there will only ever be exactly one
                        queen in each row.</p>
                    <p>Using three bits to represent each row of the board, from bottom to top, allows for exactly eight
                        possible states for each row, depending on where the queen is located. We will use 000 to
                        represent the leftmost position and 111 to represent the rightmost position. Repeating this
                        eight times gives us a 24-bit string.</p>
                </blockquote>

                <h2 id="bit-string-representation">Bit String Representation</h2>
                <p>The technicalities of the Minecraft scoreboard system mean that it would be extremely difficult to
                    represent a binary value, since the numeric system is only available in denary. Instead, the string
                    can be represented by using a switching technique to alternate two blocks in a single space, and
                    then using observers to determine which one of the two blocks is currently occupying that space.</p>
                <p>
                    <img src="projects\8queens\Pasted%20image%2020230626204039.png" alt=""/>
                </p>
                <p>Ignore the yellows for now - they will be explained later. Each one of the twenty four positional
                    spaces can either be a block of red concrete or a block of yellow concrete. They are organised in
                    blocks of three to allow editing the position of the entities on each row.</p>
                <p>
                    <img src="projects\8queens\Pasted%20image%2020230626204448.png" alt=""/>
                </p>
                <p>Looking at the layout above, we can see that the bottom row armour stand is in the second-rightmost
                    position. The bottom row corresponds to the command blocks on the top left of the bit storage.</p>
                <p>For this set of three, we can see that the first two are red concrete and the last one is black
                    concrete. Two reds and a black correspond to the binary value 110, which is equivalent to the
                    second-rightmost position. This is how the board layout is stored.</p>
                <p>Observer blocks will send a redstone signal to the connected tall command block chain whenever a red
                    or black block is switched. The tall chains will then verify the new block and move the armour stand
                    for that row accordingly.</p>
                <p>This system allows us to change the board layout without ever directly moving the armour stands,
                    which is done automatically by the observer system.</p>
                </div>
            </div>
        </div>

);
}

export default Queens;