import React, { Children } from 'react';
import Faq from "react-faq-component";
import './task.css'

function Task() {

    const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "For children (5-12) Years",
            content: <Group1 />,
        },
        {
            title: "For Teenage (13-19) years",
            content:<Group2 />,
        },
        {
            title: "For Adult (20-39) years",
            content: <Group3 />,
        },
    ],
};

    const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "#237A55",
    rowContentColor: 'grey',
    // arrowColor: "red",
    // rowTitleTextSize: "50px"
};
const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};



    return (
        <div className="task">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}

export default Task

function Group2() {
    return (
        <div class="childrenTaskDescption" id="teenTaskDescription">
                        <ul>
                            <li> During weekends collect waste soft drink cans and plastic bottles and exchange them at recycle enters. Use the money for good cause.</li>
                            <li> Make all attempt to reduce waste before it becomes waste. Make maximum use of any product.</li>
                            <li>Do not mix plastic waste with organic waste.</li>
                            <li> Try to Recycle everything you can like plastic bottles, Plastic bags, newspapers, glass, cans, foil, etc.</li>
                            <li> Never waste food as it is precious made with natural recourses. </li>
                            <li> Always Use paper on both sides and make use of scrap paper whenever possible.</li>
                            <li> Save water by taking shorter showers and use least possible water while washing hands and brushing.</li>
                            <li> Use non-toxic environment friendly detergent and floor cleaners in your house.</li>
                            <li> Use foams and aerosols based on compressed air rather than other propellants.</li>
                            <li> Turn of electric appliances like Tv, computer etc when not in use. this way you will save lot of energy!</li>
                            <li> Consider carpooling with your friends. Share cars while travelling to school. This is fun as well as you are controlling pollution.</li>
                            <li>  Pick up and properly dispose of trash and recyclables, even if they are not yours.</li>
                            <li> Conserve hot water and reduce the water heater setting by a few degrees during summer months.</li>
                            <li> Reduce the use of petroleum based products like plastics Gasoline, heating oil, diesel etc.</li>
                            <li> Ask parents to fix leaky faucets taps and pipes so that water is not wasted</li>
                            <li> Use biodegradable products wherever possible.</li>
                            <li> Make group with your friends in the neighborhood and clean up the nearby lakes and parks to ensure these are free from litter.</li>
                            <li> Properly dispose of things including hazardous household waste. Find out if your township has a hazardous waste collection program.</li>
                            <li> Use energy saving light bulbs, and electrical appliances that use less power.  These are only marginally more expensive but help saving money on electric bill!</li>
                            <li> Learn to do more with less. This implies enjoying what you already have more, repairing and reusing existing items!</li>
                            <li> Create art items like pen stands, Wall hangings, Flower pots etc with waste plastic bottles and glass bottles and sell them on Ebay or Face book.</li>
                            <li> Use manual tools such as, a simple brim instead of vacuum cleaner this helps you save power.</li>
                            <li> Use emails and e-Greetings and try to reduce the usage of physical mails and letters to save paper.</li>
                            <li> Reuse your notebooks. Set them by the phone and use the unused pages as scratch pads.</li>
                            <li> Always Pack your lunch with reusable steel or plastic boxes. Never use disposable boxes regularly.</li>
                            <li> Donate or even sell clothes or things that you no longer want instead of throwing them away.</li>
                            <li> Hang clothes instead of using dryer. This will make your clothes longer and save energy as well.</li>
                            <li> Buy products from second hand stores. This way you are cutting on cost as well as helping with reusing.</li>
                            <li> Subscribe to eco-friendly blogs, communities and new letters and keep reading the latest news and discussions about going green and eco-friendly living. (Extra points for it)</li>
                            <li> Join wildlife conservation organization and environment conservation organizations and volunteer for the programs that happen during weekends or holidays. (Extra points for it)</li>
                            <li> Share the above measures with friends and encourage them to follow as well this way you will contribute to a making the planet greener. (Extra points for it)</li>
                            <li> Make a sticker with the following Slogan and stick it on your school bag. So that your friends will know about your decision and join you.
                               <strong>I am contributing to a Greener Planet. Do you want to Join?</strong>
                                (Extra points for it)
                                </li>
                        </ul>

                        <h2>1 Week challenge (Max. Points):</h2>

                        <p><strong>Day 1 :</strong>Plant a leafy tree in your neighborhood and water it regularly.</p>

                        <p><strong>Day 2 :</strong>Plant a garden with flowers that attract butterflies and don’t forget to include the host plants.</p>

                        <p><strong>Day 3 :</strong>: Convert old plastic bottles into plant holders, fill it up with soil and grow tiny flowering plants.</p>

                        <p><strong>Day 4 :</strong>Use eco-friendly pesticides for your garden plants . This way you will retain the soil fertility.</p>

                        <p><strong>Day 5 :</strong>Make a bird feeder and hang it in your back yard also set up a birdbath, to support survival of  wild birds</p>

                        <p><strong>Day 6 :</strong>:  “Adopt” an animal or habitat as a present for family or friends.</p>

                        <p><strong>Day 7 :</strong>Start a organic compost project in your backyard and get your friends involved. this helps you  keep a lot of waste out of landfills!</p>

                        <p><strong >Note :</strong>Go vegetarian at least once a week. As consuming meat means you are consuming acres of greenery. Remember veggies are tasty too.</p>

                        
                    </div>
    );
}

function Group1() {
    return(
        <div class="childrenTaskDescption" id="childrenTaskDescption">
            <ul>
                <li>Buy quality toys that last longer and eco-friendly. So that you don’t create more trash.</li>
                <li> Make sure to use rechargeable batteries in your toys and other activities. Avoid using hundreds of single use batteries</li>
                <li> Always Pack your lunch with reusable steel or plastic boxes. Never use disposable boxes regularly.</li>
                <li> Never waste food as it is precious made with natural recourse.</li>
                <li>Always Use paper on both sides and make use of scrap paper whenever possible.</li>
                <li> Save water by taking shorter showers and use least possible water while washing hands and brushing.</li>
                <li> Turn off electric appliances like Tv, computer, fan, Heater etc when not in use. This way you will save lot of energy!</li>
                <li> Ask parents to fix leaky faucets taps and pipes so that water is not wasted.</li>
                <li> Make group with your friends in the neighborhood and clean up the nearby lakes and parks to ensure these are free from litter.</li>
                <li> Learn to do more with less and creating best out of waste such as home decorating materials. This implies enjoying what you already have more, repairing and reusing existing items!</li>
                <li> Create art items like pen stands, Wall hangings, Flower pots etc with waste plastic bottles and glass bottles and sell them on Ebay or Face book.</li>
                <li> Reuse your notebooks. Set them by the phone and use the unused pages as scratch pads.</li>
                <li> Consider carpooling with your friends. Share cars while travelling to school. This is fun as well as you are controlling pollution</li>
                <li> Donate or even sell clothes or things that you no longer want instead of throwing them away.</li>
                <li> Ask your dad to keep your car tires properly inflated and drive in optimum speed that provides maximum mileage.</li>
                <li> Share the above measures with friends and encourage them to follow as well this way you will contribute to a making the planet greener. </li>
                <li> Make a sticker With the following Slogan and stick it on your school bag. So that your friends will know about your decision and join you. <br />
                    <strong>
                        I am contributing to a Greener Planet.Do you want to Join ? 
                    </strong>
                    <br />
                    <strong>  
                        (Add extra points for this task)
                    </strong>
            </li>
                
            </ul>

            <h2>1 Week challenge (Max. Points):</h2>

            <p><strong>Day 1 :</strong>Plant a leafy tree in your neighborhood and water it regularly.</p>

            <p><strong>Day 2 :</strong>Plant a garden with flowers that attract butterflies and don’t forget to include the host plants.</p>

            <p><strong>Day 3 :</strong>: Convert old plastic bottles into plant holders, fill it up with soil and grow tiny flowering plants.</p>

            <p><strong>Day 4 :</strong>Use eco-friendly pesticides for your garden plants . This way you will retain the soil fertility.</p>

            <p><strong>Day 5 :</strong>Make a bird feeder and hang it in your back yard also set up a birdbath, to support survival of  wild birds</p>

            <p><strong>Day 6 :</strong>:  “Adopt” an animal or habitat as a present for family or friends.</p>

            <p><strong>Day 7 :</strong>Start a organic compost project in your backyard and get your friends involved. this helps you  keep a lot of waste out of landfills!</p>

            <p><strong >Note :</strong>Go vegetarian at least once a week. As consuming meat means you are consuming acres of greenery. Remember veggies are tasty too.</p>
            
        </div>
                                        
    )
}


function Group3() {
    return(
        <div class="childrenTaskDescption" id="adultTaskDescription">

                        <ul>
                            <li> Plant a leafy tree in your neighborhood and water it regularly.</li>
                            <li> Do not mix plastic waste with organic waste.</li>
                            <li> Make all attempt to reduce waste before it becomes waste. Make maximum use of any product.</li>
                            <li> Try to Recycle everything you can like plastic bottles, Plastic bags, newspapers, glass, cans, foil, etc.</li>
                            <li> Never waste food as it is precious made with natural recourse.</li>
                            <li> Set your refrigerator temperature at 36° to 38° and your freezer at 0° to 5°.</li>
                            <li> Learn about alternatives to household cleaning items that do not use hazardous chemicals—consider alternatives like baking soda, scouring pads, water or a little more elbow grease.</li>
                            <li> Buy green electricity - electricity produced by low - or even zero-pollution facilities (NC GreenPower - <a href="www.ncgreenpower.org"> www.ncgreenpower.org</a>).</li>
                            <li> When no good alternatives exist to a toxic item, find the least amount required for an effective, sanitary result.</li>
                            <li> Shop with a canvas bag instead of using paper and plastic bags.</li>
                            <li>  Subscribe to eco-friendly blogs, communities and new letters and keep reading the latest news and discussions about going green and eco-friendly living. (Extra points for it)</li>
                            <li> Join wildlife conservation organization and environment conservation organizations and volunteer for the programs that happen during weekends or holidays. (Extra points for it)</li>
                            <li> Share the above measures with friends and encourage them to follow as well this way you will contribute to a making the planet greener. (Extra points for it)</li>
                            <li> Make a sticker with the following Slogan and stick it on your school bag. So that your friends will know about your decision and join you.
                                <strong>I am contributing to a Greener Planet. Do you want to Join?</strong>
                                 (Extra points for it)
                                 </li>
                        </ul>
                        
                        <h2>10 Days challenge for office workers (Max. Points):</h2>

                        <ul>
                            <li> Copy and print on both sides of paper. Reuse items like envelopes, folders and paper clips.</li>
                            <li> Use mailer sheets for interoffice mail instead of an envelope.</li>
                            <li> Set up a bulletin board for memos instead of sending a copy to each employee.</li>
                            <li> Use e-mail instead of paper correspondence.</li>
                            <li> Print in “draft” format to conserve ink.</li>
                            <li> Use recycled paper and printer cartridges.</li>
                            <li> Use discarded paper for scrap paper.</li>
                            <li> Encourage your school and/or company to print documents with soy- based inks, which are less toxic.</li>
                            <li> Use a ceramic coffee mug instead of a disposable cup.</li>
                            <li> Use the stairs instead of the elevator. </li>
                            <li> Shut off electrical equipment in the evening when you leave work, includ- ing your computer monitor. </li>
                            <li> Ask your employer to consider flexible work schedules or telecommuting.</li>
                         
                        </ul>

                        <h2>10 Day challenge (Max. Points):</h2>

                        <ul>
                            <li> Avoid using leaf blowers and other dust-producing equipment.</li>
                            <li> Use an electric lawnmower instead of a gas-powered one.</li>
                            <li> Leave grass clippings on the yard— they decompose and return nutrients to the soil.</li>
                            <li> Use recycled wood chips as mulch to keep weeds down, retain moisture and prevent erosion.</li>
                            <li> Use only the required amount of fertilizer.</li>
                            <li> Create a wildlife habitat by planting native or drought resistant plants.</li>
                            <li> Water grass before 7 am.</li>
                            <li> Rent or borrow items like ladders and chain saws that are seldom used.</li>
                            <li> Take actions that use non-hazardous components (e.g., to ward off pests, plant marigolds in a garden instead of using pesticides).</li>
                            <li> Put leaves in a compost heap instead of burning them or throwing them away. Yard debris too large for your compost bin should be taken to a yard debris recycler.</li>
                        </ul>

                        <h2>1 Week challenge (Max. Points):</h2>

                        <p><strong>Day 1 :</strong>Plant a leafy tree in your neighborhood and water it regularly.</p>

                        <p><strong>Day 2 :</strong>Plant a garden with flowers that attract butterflies and don’t forget to include the host plants.</p>

                        <p><strong>Day 3 :</strong>: Convert old plastic bottles into plant holders, fill it up with soil and grow tiny flowering plants.</p>

                        <p><strong>Day 4 :</strong>Use eco-friendly pesticides for your garden plants . This way you will retain the soil fertility.</p>

                        <p><strong>Day 5 :</strong>Make a bird feeder and hang it in your back yard also set up a birdbath, to support survival of  wild birds</p>

                        <p><strong>Day 6 :</strong>:  “Adopt” an animal or habitat as a present for family or friends.</p>

                        <p><strong>Day 7 :</strong>Start a organic compost project in your backyard and get your friends involved. this helps you  keep a lot of waste out of landfills!</p>

                        <p><strong>Note :</strong>Go vegetarian at least once a week. As consuming meat means you are consuming acres of greenery. Remember veggies are tasty too.</p>
                    </div>
        )
}