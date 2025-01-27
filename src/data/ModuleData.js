import Chapter from '../components/documentationComponents/Chapter';
import Section from '../components/documentationComponents/Section';
import SpecialText from '../components/documentationComponents/SpecialText';
import InformationBalloon from '../components/documentationComponents/InformationBalloon';
import Video from '../components/documentationComponents/Video';
import YoutubeVideo from '../components/documentationComponents/YoutubeVideo';
import Image from '../components/documentationComponents/Image';

import flareCraft_editor from '../assets/img/flareCraft/tutorial/editor.png';

const data = {
    AnimationController: {
        title: "Animation Controller",
        description: `
            Create animation controllers that will drive animation on any model.
        `,
        elements: [
            <InformationBalloon type="warning">
                <p>This documentation is incomplete.</p>
            </InformationBalloon>,
            <InformationBalloon type="warning">
                <p>This plugin requires knoledge of coding in order to be used.</p>
            </InformationBalloon>,
            <InformationBalloon type="info">
                <p>This plugin is up for sale in the roblox marketPlace for 7.99$.</p>
                <a target='_blank' href="https://create.roblox.com/store/asset/18330184496">Buy Plugin</a>
            </InformationBalloon>,
            <Chapter title="Introduction">
                <Section>
                    <p>
                        This AnimationController plugin helps you create animation controllers more easily. Instead of having to manually code every node
                        you can make object descriptions with this plugin and convert them in run time to a controller.
                    </p>
                </Section>
            </Chapter>,
            <Chapter title="Setup">
            <InformationBalloon type="warning">
                <p>Changing the parent of the AnimationController module will result in failure of dependencies.</p>
            </InformationBalloon>
            <div class="container"> 
            <p>
                To use your animation controller you have to import the AnimationController module to your game. This is done by using the orange button on the home page after opening the plugin.
            </p>
            {/* <YoutubeVideo src="https://www.youtube.com/embed/00lAdjpy8Bs?si=CTL9Jxrier1ifdLL"/> */}
            </div>
        </Chapter>,
        <Chapter title="Controllers">
            <Section title="Creation">
            <div class="container">
            <ul>
                <li>
                    <span className='bold'>New Controller</span> - Click the blue "Create Controller" button on the home page.
                </li>
                <li>
                    <span className='bold'>Complete Form</span> - Insert your desired name in the input field and click confirm.
                </li>
                <li>
                    <span className='bold'>Edit Page</span> - You will be take to the edit page. Find out more about the controller edit page below.
                </li>
            </ul>
        {/* <YoutubeVideo src="https://www.youtube.com/embed/3wQfdMCe27I?si=jIZHSUFsJ5Bsa8Mq"/> */}
    </div>  
            </Section>
        <div class="container">
            <Section title="Find Controller">
            <ul>
                <li>
                    <span className='bold'>Find Controller</span> - Click the "View" button on the home page.
                </li>
                <li>
                    <span className='bold'>Edit Controller</span> - Click the "Edit" button next to your desired controller name.
                </li>
                <li>
                    <span className='bold'>Edit Page</span> - Find more about the controller edit page below.
                </li>
            </ul>

            </Section>
            {/* <YoutubeVideo src="https://www.youtube.com/embed/6I1LtUOA0TA?si=L3vCMwZfw2fB51AL"/> */}
        </div>

    <div class="container">
        <Section title="Tree Navigation">
            <p>
            After selecting a tree to edit and redirection to the edit page. The current selected parent node will show up on top of the page. With its children underneath.
            You can navigate through the tree by clicking a child node. This will in turn show its children underneath the page.
            </p>

            
        </Section>
        {/* <YoutubeVideo src="https://www.youtube.com/embed/3wQfdMCe27I?si=jIZHSUFsJ5Bsa8Mq"/> */}
    </div>

    <div class="container">
        <Section title="Node adjustment">
        <p>
            On a node you will find buttons wich allow you to edit the node and the trees behavior. 
        </p>
        <ul>
                <li>
                    <span className='bold'>Condition</span> - Opens a condition module. This module should return a function that returns either true or false.
                </li>
                <li>
                    <span className='bold'>Action</span> - Opens a action module. This module should return a function that returns either true or false.
                </li>
                <li>
                    <span className='bold'>Discription</span> - Opens a promt that shows the description of this node.
                </li>
                <li>
                    <span className='bold'>Remove</span> - Destroys the node and moves all its children to the current parent node.
                </li>
            </ul>
        </Section>
        {/* <YoutubeVideo src="https://www.youtube.com/embed/3wQfdMCe27I?si=jIZHSUFsJ5Bsa8Mq"/> */}
    </div>

</Chapter>,
<Chapter title="Instancing in game">
<Section>
    <p>
        In order to use a controller in your world you need to call it with a script. 
        After you required the AnimationController module. Here is a code example:
    </p>
</Section>
<Section title="example scipt">
    <ul className="script">
        <p>local AnimationController = require(workspace.AnimationControllerV2)</p>
        <p>local controller = AnimationController.new()</p>
        <p>controller:loadFromPhysical()</p>
        <p></p>
        <p>controller:run()</p>
    </ul>
</Section>
</Chapter>,
        ]
    },
    behaviourtree: {
        title: "Behaviour Trees",
        description: `
            Create behaviour trees to manage NPC's or other behavior.
        `,
        elements: [
            <InformationBalloon type="warning">
                <p>This documentation is incomplete.</p>
            </InformationBalloon>,
            <InformationBalloon type="warning">
                <p>This plugin requires knoledge of coding in order to be used.</p>
            </InformationBalloon>,
            <InformationBalloon type="info">
                <p>This plugin is up for sale in the roblox marketPlace for 7.99$.</p>
                <a target='_blank' href="https://create.roblox.com/store/asset/18330184496">Buy Plugin</a>
            </InformationBalloon>,
            <Chapter title="Introduction">
                <Section>
                    <p>
                        Behavior trees plugin allows you to create behaviour trees and instance them inside your world. 
                        These trees can help you with creating complex NPC behavior. Like zombies chasing a player or 
                        a friendly NPC helping the player battle enemies. 
                    </p>
                </Section>
            </Chapter>,
            <Chapter title="Setup">
            <InformationBalloon type="warning">
                <p>Changing the parent of the Node module will result in failure of dependencies.</p>
            </InformationBalloon>
            <div class="container"> 
            <p>
                Upon opening the plugin you will find a "Repair" button on top of the page. 
                On first use you need to click this button to insert the required "Node" module inside your replicated storage.
            </p>
            {/* <YoutubeVideo src="https://www.youtube.com/embed/00lAdjpy8Bs?si=CTL9Jxrier1ifdLL"/> */}
            </div>
        </Chapter>,
        <Chapter title="Tree creation and customization">
        <div class="container">
            <Section title="Creation">
            <ul>
                <li>
                    <span className='bold'>New Tree</span> - Click the "New Tree" button on the top of the page.
                </li>
                <li>
                    <span className='bold'>Complete Form</span> - Insert your desired name in the input field and click confirm.
                </li>
            </ul>

            </Section>
            {/* <YoutubeVideo src="https://www.youtube.com/embed/6I1LtUOA0TA?si=L3vCMwZfw2fB51AL"/> */}
        </div>
    
    <div class="container">
        <Section title="Select Tree">
            <p>
            On the home page of the plugin you will find a list that shows all trees in your place.
            By clicking one of them you will be redirected to the edit page.
            </p>
        </Section>
        {/* <YoutubeVideo src="https://www.youtube.com/embed/3wQfdMCe27I?si=jIZHSUFsJ5Bsa8Mq"/> */}
    </div>

    <div class="container">
        <Section title="Tree Navigation">
            <p>
            After selecting a tree to edit and redirection to the edit page. The current selected parent node will show up on top of the page. With its children underneath.
            You can navigate through the tree by clicking a child node. This will in turn show its children underneath the page.
            </p>

            
        </Section>
        {/* <YoutubeVideo src="https://www.youtube.com/embed/3wQfdMCe27I?si=jIZHSUFsJ5Bsa8Mq"/> */}
    </div>

    <div class="container">
        <Section title="Node adjustment">
        <p>
            On a node you will find buttons wich allow you to edit the node and the trees behavior. 
        </p>
        <ul>
                <li>
                    <span className='bold'>Condition</span> - Opens a condition module. This module should return a function that returns either true or false.
                </li>
                <li>
                    <span className='bold'>Action</span> - Opens a action module. This module should return a function that returns either true or false.
                </li>
                <li>
                    <span className='bold'>Discription</span> - Opens a promt that shows the description of this node.
                </li>
                <li>
                    <span className='bold'>Remove</span> - Destroys the node and moves all its children to the current parent node.
                </li>
            </ul>
        </Section>
        {/* <YoutubeVideo src="https://www.youtube.com/embed/3wQfdMCe27I?si=jIZHSUFsJ5Bsa8Mq"/> */}
    </div>

</Chapter>,
<Chapter title="Instancing in game">
<Section>
    <p>
        In order to use a tree in your world you need to call it with a script. 
        You need to use the tree contructor to constuct the tree. This will return a working tree wich you can call :Start on
    </p>
</Section>
<Section title="example scipt">
    <ul className="script">
        <p>local root = workspace.TreeFolder.NewTree.Root</p>
        <p>local treeConstructor = require(game.ReplicatedStorage.TreeConstructor)</p>
        <p>local tree = treeConstructor.constructTree(root)</p>
        <p></p>
        <p>tree:Start()</p>
    </ul>
</Section>
</Chapter>,
        ]
    },
    Beziers: {
        title: "Bezier Curve",
        description: `
            Create bezier curves using control points.
        `,
        elements: [
            <InformationBalloon type="info">
                <p>This plugin is up for sale in the roblox marketPlace for 7.99$.</p>
                <a target='_blank' href="https://create.roblox.com/store/asset/16969433057">Buy Plugin</a>
            </InformationBalloon>,
            <Chapter title="Introduction">
                <Section>
                    <p>
                        Bezier Curve is for instancing Cubic Bezier Curves inside your world. These curves can be used for Roller coasters or anything with a curved path. 
                    </p>
                </Section>
            </Chapter>,
            <Chapter title="Setup">
            <div class="container">
            <p>
                Once you installed the plugin the first thing you need to do is insert the bezier module to be able to instance the curves in game. 
                You can do this by opening the plugin and pressing replace module under the repair section.
            </p>
            {/* <YoutubeVideo src="https://www.youtube.com/embed/00lAdjpy8Bs?si=CTL9Jxrier1ifdLL"/> */}
            </div>
        </Chapter>,
        <Chapter title="Navigation">
        <p>
            On the home page you can press one of the buttons to navigate to their respective pages.
        </p>
        <div class="container">
            <Section title="Create">
            <p>
            "Create" will spawn a new curve in the game.
            </p>
            <p>
                After the curve creation you will be prompted to the curve edit page.
                A system edit page will show up. More over this in the System Editor section.
            </p>

            <ul>
                <li>
                    <span className='bold'>Add Preset Section</span> - Add preset sections to current curve.
                </li>
                <li>
                    <span className='bold'>Add Section</span> - Add a brand new section to current curve.
                </li>
                <li>
                    <span className='bold'>Draw Coaster Track</span> - Draw a coaster track on the current curve.
                </li>
            </ul>

            </Section>
            {/* <YoutubeVideo src="https://www.youtube.com/embed/6I1LtUOA0TA?si=L3vCMwZfw2fB51AL"/> */}
        </div>
    
    <div class="container">
        <Section title="Find Curves">
            <p>
            "Find Curves" will navigate the main plugin tab to a list of all systems in your system folder.
            Pressing one of these buttons will select the system in explorer and open the "System Editor".
            </p>
        </Section>
        {/* <YoutubeVideo src="https://www.youtube.com/embed/3wQfdMCe27I?si=jIZHSUFsJ5Bsa8Mq"/> */}
    </div>
    <div class="container">
        <Section title="Script Templates">
            <p>
            "Script Templates" will navigate the main plugin tab to a list of all premade systems you can import. 
            User made systems can be found here aswell.
            </p>
        </Section>
        {/* <YoutubeVideo src="https://www.youtube.com/embed/WRTyb550g9M?si=w0xWPNZ94e7BYxHM"/> */}
    </div>
</Chapter>,
        ]
    },
    flareCraft: {
        title: "Flare Craft",
        description: `
        Build particle systems using modules.
        `,
        elements: [
            <InformationBalloon type="info">
                <p>Plugin comes with premade effects and systems.</p>
            </InformationBalloon>,
            <InformationBalloon type="info">
            <p>This plugin is up for sale in the roblox marketPlace for 7.99$.</p>
            <a target='_blank' href="https://create.roblox.com/store/asset/15041827425">Buy Plugin</a>
            </InformationBalloon>,
            <div className="container">
                <Chapter title="Introduction">
                    <p>
                        This plugin allows you to build particle systems using modules. 
                        Because the systems are completly build from modules the posibilities are endless.
                    </p>
                    <p>
                        This plugin comes with a module that will handle the particle systems in your world. 
                    </p>
                </Chapter>
                <YoutubeVideo src="https://www.youtube.com/embed/I4DT7ZGYgLg"/>
            </div>,
            <Chapter title="Setup">
                <div class="container">
                <p>
                    Once you installed the plugin the first thing you need to do is insert the needed modules and folders in your world. 
                    You can do this by opening the plugin and pressing the repair button. You can find it by clicking the 
                    studio button on the plugin home page.
                </p>
                <YoutubeVideo src="https://www.youtube.com/embed/00lAdjpy8Bs?si=CTL9Jxrier1ifdLL"/>
                </div>
            </Chapter>,
            <Chapter title="Navigation">
                    <p>
                        On the home page you can press one of the buttons to navigate to their respective pages.
                    </p>
                    <div class="container">
                        <Section title="Make System">
                        <p>
                        "Make System" will open a new widget displaying all available system templates.
                        You can choose one to make a system out of it. Or press cancel if you changed your mind.
                        </p>
                        <p>
                            After you choose a system template it will be added to the system folder and selected.
                            A system edit page will show up. More over this in the System Editor section.
                        </p>
                        </Section>
                        <YoutubeVideo src="https://www.youtube.com/embed/6I1LtUOA0TA?si=L3vCMwZfw2fB51AL"/>
                    </div>
                
                <div class="container">
                    <Section title="Select System">
                        <p>
                        "Select System" will navigate the main plugin tab to a list of all systems in your system folder.
                        Pressing one of these buttons will select the system in explorer and open the "System Editor".
                        </p>
                    </Section>
                    <YoutubeVideo src="https://www.youtube.com/embed/3wQfdMCe27I?si=jIZHSUFsJ5Bsa8Mq"/>
                </div>
                <div class="container">
                    <Section title="Import Premade">
                        <p>
                        "Import Premade" will navigate the main plugin tab to a list of all premade systems you can import. 
                        User made systems can be found here aswell.
                        </p>
                    </Section>
                    <YoutubeVideo src="https://www.youtube.com/embed/WRTyb550g9M?si=w0xWPNZ94e7BYxHM"/>
                </div>
                
                <div class="container">
                    <Section title="Make System Body">
                        <p>
                        "Make System Body" will open a new widget displaying all available system body templates.
                        You can choose one to spawn and link to a system.
                        </p>
                    </Section>
                    <YoutubeVideo src="https://www.youtube.com/embed/6P2KhmhPs94?si=tk9wjOfAHZ9ptsKP"/>
                </div>
                
                <Section title="Studio">
                    <p>
                    "Studio" will navigate the main plugin tab a new page with studio related pages / functions. 
                    Such as the repair function.
                    </p>
                </Section>
                <div class="container">
                    <Section title="Import/Export">
                    <p>
                        Here you can export your selected system.There can also be found a way to import them.
                    </p>
                    </Section>
                    <YoutubeVideo src="https://www.youtube.com/embed/uLIK79l5bQw?si=tuAvScW-1-XWN8GU"/>
                    </div>
                
                <Section title="Changelog">
                    <p>
                    "Changelog" tells you what has changed within the plugin through the time.
                    </p>
                </Section>
        </Chapter>,
        <Chapter title="System Editor">
                <p>
                    In the system editor you can edit your systems by adding or removing modules.
                    Each module will add a behavior to your system or particles itself.
                </p>
            <div class="container">
            <Section title="Sections">
                <p>
                    There are several sections on this page wich all have a specific purpose.
                    Each section represents a moment on wich the modules will be called.
                    Some are only called on initialization others are called each frame to render a particle.
                </p>
                <br></br>
                <ul>
                    <li>
                        <span className='bold'>System Spawn</span> - Will be called each time a system is created.
                    </li>
                    <li>
                        <span className='bold'>System Update</span> - Will be called every frame. In here you add things such as the particles spawn rate.
                    </li>
                    <li>
                        <span className='bold'>Particle Spawn</span> - Will be called each time a particle is initialized. Here you add things such as velocity and/or acceleration. 
                    </li>
                    <li>
                        <span className='bold'>Particle Update</span> - Will be called each time a particle is updated. Here you add things such as particle color, calculate velocity. 
                    </li>
                    <li>
                        <span className='bold'>Events</span> - Will be called each time a particle is spawned. Here you add modules that will initialize your events such as particle collision or death.
                    </li>
                    <li>
                        <span className='bold'>Render</span> - Will be called each time a particle needs to be rendered. Here you add modules that will set the particles renderModel the same as the values in your particle description table.
                    </li>
                </ul>
            </Section>
                <Image src={flareCraft_editor}></Image>
            </div>
            
            <div class="container">
            <Section title="Add Module Button">
                <p>
                    By clicking the colored button next to the title of the section.
                    A new widget will open. In this window several dropdowns will appear. Each dropdown represents a category if you open it
                    you will see all modules in that category wich also fit with the target section.
                    If you dont want to add a module you can just close the widget.
                </p>
            </Section>
            <YoutubeVideo src="https://www.youtube.com/embed/XmxO8u9UH_8?si=WlHWCNHB0aPfziQ6"/>
            </div>
            <Section title="Module Button">
                <p>
                    When you add a module to a system. It will add a button under their own section.
                    When you hover over some buttons will appear, you can change the order of a module by clicking the up/down arrow.
                    Or remove it by clicking the remove button.
                </p>
                <p>
                    When you click on the module button itself, a submenu will appear. In this submenu you can find 2 buttons "Open" and "Select".
                    Open will open the module in the script editor and select will select the module in the explorer window.
                </p>
            </Section>
        </Chapter>,
        ]
    },
    dataHandler: {
        title: "Data Handler",
        description: `
        Easy way to store data
        `,
        elements: [
            <Chapter title="Introduction">
                <p>
                    You can use this module to store data in the Roblox datastore.
                    Its usefull to save player stats and custom data with just a few lines of code.
                </p>
            </Chapter>,
            <Chapter title="Player Data">
                <p>To store data for a player you have to make the <SpecialText type="class">playerData</SpecialText> object using <SpecialText type="code">playerData.new(Player)</SpecialText> This will return the object wich you need to store in a variable.
                    Do this is all in a <SpecialText type="code">game.Players.PlayerAdded</SpecialText> Connection.
                </p>
            </Chapter>,
            <Chapter title="Player Stats">
                <p>If you wish to save player stats all you have to do is call the <SpecialText type="code">playerData:addStat(Name, initialize, get)</SpecialText> 
                <ul>
                    <li>
                        <span className='bold'>Name</span> - Will be the key of your data.
                    </li>
                    <li>
                        <span className='bold'>initialize</span> - Will be the function that runs when sync is called. in here you write code to apply your data to your game. You can get the data from the first parameter of your function.
                    </li>
                    <li>
                        <span className='bold'>get</span> - Will be the function that runs when the player leaves. Make sure to always return data or nill will be saved. 
                    </li>
                </ul>
                The <SpecialText type="code">playerData:addStat()</SpecialText> Will make a value in the leaderstats folder so you can visualize and change it outside the data handler script
                
                When you added all your values call <SpecialText type="code">playerData:sync()</SpecialText> to sync your data with the data from datastore.
                </p>
            </Chapter>,
        ]
    },
    goliathparticles: {
        title: "Goliath Particles",
        description: `
        Spawn 3D particles inside your world. 2.0
        `,
        elements: [
            <h3>Note: This documentation is not complete yet and will improve over time.</h3>,
            <Chapter title="Introduction">
                <p>
                    Goliath Particles is a system that allows for 3d particles to spawn inside your game.
                    Particles are updated every x amount of time acording to their systems settings.
                    Particles can be coded seperately aswell.

                    This new version comes with new features such as: Run outside runtime, Perlin Noise, LightUpdate, PreCalculate Appearance and more.
                </p>
                <YoutubeVideo src="https://www.youtube.com/embed/SmrbaTT1Lcw" />
            </Chapter>,
            <Chapter title="Plugin">
                <Section title="Installation">
                    <p>This version of the system is not plublished yet. Once the system is released it will be available on the roblox marketPlace for 600 Robux.</p>
                        {/* <p>
                            Go to 
                            &nbsp;<SpecialText type="link"></SpecialText>&nbsp;
                            And click on the install button to install the plugin.
                        </p> */}
                </Section>
                <Section title="Requirements">
                    <p>
                        The plugin requires script insertion to be allowed or the particles wont be able to work in run time.
                    </p>
                </Section>
            </Chapter>,
            <Chapter title="Plugin Pages">
                <Section title="Edit Functions">
                    <p>
                        On this page you will find options that help you to quickly make and break particle systems
                    </p>
                </Section>
                <Section title="Presets">
                    <p>
                        On this page you will find pre-made particle systems to help you get 
                        femilliar with the system settings 
                        and inspire you for the creation of your own systems.
                    </p>
                </Section>
                <Section title="System Properties">
                    <p>
                        On this page you will find all options the system has.
                        The settings can be adjusted in the Attributes section of roblox's editor aswell.
                        But they're not sorted, on this page they are.
                    </p>
                </Section>
                <Section title="Studio">
                    <p>
                        On this page you will find options that have something to do with the studio.
                        Like the run button for example.
                    </p>
                </Section>
                <Section title="Plugin">
                    <p>
                        On this page you will find options for the plugin.
                    </p>
                </Section>
            </Chapter>,
            <Chapter title="Module">
                <Section title="Settings">
                    detailed description of all settings will soon be added.
                </Section>
                <Section title="Events">
                    Events are a great way to make your add extra effects and or logic to your particles. 
                    For instance you could use the death event to make Fireworks.
                    The Collision event is a great way to make sure particles dont go though walls.
                </Section>
            </Chapter>,
            <Chapter title="Custom Particles">
                <p>
                    You probably do not want to stick to the boring default particle. Instead you can use a custom one. This will allow you to change the material, originalSize and or shape of the particles spawned by the system.
                    To assign a custom particle to your system. Insert a <SpecialText type="class">ObjectValue</SpecialText> inside of your system
                    and name it <SpecialText type="string">Target</SpecialText> this way the system knows you would like to use its value as a custom particle.
                    Assign your custom particle to it's value and your done. You now have a system that emmits your custom particles.
                </p>
        </Chapter>,
        ]
    },
    meshparticles: {
        title: "Mesh Particles",
        description: `
            Spawn 3D particles inside your world.
        `,
        elements: [
            <Chapter title="Introduction">
                <Section>
                    <>
                        <p>
                            Meshparticles is a plugin that allows you to spawn 3D objects as particles. 
                            It's compatible with:
                            &nbsp;<SpecialText type="class">Basepart's</SpecialText>,
                            &nbsp;<SpecialText type="class">Meshpart's</SpecialText> or
                            &nbsp;<SpecialText type="class">Model's</SpecialText>
                        </p>
                        <YoutubeVideo src="https://www.youtube.com/embed/qLJnRs3mpUE" />
                    </>
                </Section>
                <Section title="Important Info">
                    <>
                        <p>
                        When the plugin is firstly installed, studio is opened or the plugin updates. 
                        3 scripts will be inserted into your place. 
                        2 of wich are to activate the particle system on 
                        &nbsp;<SpecialText type="class">Part's</SpecialText>,
                        &nbsp;<SpecialText type="class">Attachment's</SpecialText>
                        &nbsp;that share the collection tag 
                        &nbsp;<SpecialText type="string">ParticleSystem</SpecialText>. The other one is the Meshparticle module itself. It can be found in 
                        &nbsp;<SpecialText type="path">game.ReplicatedStorage &gt; ModulePack &gt; Meshparticles</SpecialText>
                        </p>
                    </>
                </Section>
            </Chapter>,
            <Chapter title="Plugin Installation">
                <Section title="How To Install">
                    <>
                        <p>
                            Go to 
                            &nbsp;<SpecialText type="link">https://www.roblox.com/library/11453345861/ParticlePlugin</SpecialText>&nbsp;
                            And click on the install button to install the plugin.
                        </p>
                    </>
                </Section>
                <Section title="Open Plugin">
                    <>
                        <p>
                            After installing the plugin you should see a button appear within the plugins tab.
                            By clicking on it the plugin will open.
                        </p>
                    </>
                </Section>
            </Chapter>,
            <Chapter title="Functions">
                <Section title="Add">
                    <>
                        <p>
                            By clicking the Add button
                            all selected objects that meet class conditions
                            &nbsp;<SpecialText type="class">Part</SpecialText> or
                            &nbsp;<SpecialText type="class">Attachment</SpecialText>&nbsp;
                            will change into a particle system.
                        </p>
                    </>
                </Section>
                <Section title="Remove">
                    <>
                        <p>
                            By clicking the Remove button all selected objects will be cleared of attributes and tags.
                        </p>
                    </>
                </Section>
                <Section title="Copy">
                    <>
                        <p>
                            By clicking the Copy button all attributes and its values from the first selected object are copied and stored.
                        </p>
                    </>
                </Section>
                <Section title="Paste">
                    <>
                        <p>
                            By clicking the Paste button all selected objects that meet class conditions will enherit the last copy done with the copy button.
                        </p>
                    </>
                </Section>
            </Chapter>,
            <Chapter title="Events">
                <Section title="">
                    <>
                        <p>
                            The event page can be accesed by clicking
                            &nbsp;<SpecialText type="path">More &gt; Events</SpecialText>.
                            By pressing the add button a template script will be added to the first selection.
                            Event scripts belong in a particle.
                        </p>
                        <ul>
                            <li>
                                <p className='test'>
                                    <span className='bold'>OnDeath - </span>
                                    This event fires when a particle dies. 
                                    Happens when lifetime is acceded or on death by collision.
                                </p>
                            </li>
                            <li>
                                <p className='test'>
                                    <span className='bold'>OnCreation - </span>
                                    This event fires when a particle is created.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className='bold'>OnCollision - </span>
                                    This event fires when a particle collides. The collision event is not capped and fires each frame it is colliding. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className='bold'>OnMovement - </span>
                                    This event fires when a particle moves from its previous position.
                                </p>
                            </li>
                        </ul>
                    </>
                </Section>
            </Chapter>,
            <Chapter title="Presets">
                <Section title="">
                    <p>
                        Presets can be found under 
                        &nbsp;<SpecialText type="path">More &gt; Presets</SpecialText>.
                        If you hover over them 2 buttons appear.
                        Add copies over all attributes from the target preset.
                        Spawn spawns in the target preset in front of your cam.
                    </p>
                </Section>
            </Chapter>,
            <Chapter title="Custom Particles">
                <Section title="">
                    <p>
                        If you want to change the material, originalSize and or shape of the particles spawned by the system 
                        you have to insert a <SpecialText type="class">ObjectValue</SpecialText> inside of your system.
                        In order for it to be used you have to name it <SpecialText type="string">Target</SpecialText>
                        and set it's value to your target particle.
                    </p>
                </Section>
            </Chapter>,
            <Chapter title="System Property Info">
                <Section title="Size">
                    <p>
                        You might have noticed the size parameter only goes from 0 to 1. 
                        This value is actually a multiplier of the originalSize wich refers to the size of your target particle.
                        If you would like to make your particle able to get bigger then 1 stud you have to change the target particles size.
                        This is only possible when using the custom particle. Using the default particle only allows you to change the size up to 1 stud.
                        Since the originalSize of that particle will be <SpecialText type="class">vector3.new(1, 1, 1)</SpecialText>
                    </p>
                </Section>
            </Chapter>,
        ]
    },
    // optiloop: {
    //     title: "OptiLoop",
    //     description: `
    //         Optimized for and while loops.
    //     `,
    //     elements: [
    //         <Chapter title="Introduction">
    //             <Section>
    //                 <p>
    //                     OptiLoop is for instancing for and while loops that run on runservice instead of roblox's default loops.
    //                 </p>
    //             </Section>
    //         </Chapter>,
    //     ]
    // },
    // ai: {
    //     title: "AI (Behavior trees)",
    //     description: `
    //         use this module to create behavior trees.
    //     `,
    //     elements: [
    //         <Chapter title="Introduction">
    //             <Section>
    //                 <p>
    //                     AI behavior trees can be used to make npc behavior scripts. The module also contains preset behavior like :walkTo() and :walkToAdvanced() this function uses pathfinding.
    //                 </p>
    //             </Section>
    //         </Chapter>,
    //     ]
    // },
}

export default data;