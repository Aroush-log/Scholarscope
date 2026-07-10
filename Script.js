function showProfile() {
    document.getElementById("profile").classList.remove("hidden");
    window.scrollTo({
        top: document.getElementById("profile").offsetTop,
        behavior: "smooth"
    });
}


function findScholarships() {

    let interest = document.getElementById("interest").value;
    let strength = document.getElementById("strength").value;

    let matches = "";


    if (interest === "Computer Science") {

        matches += `
        <div class="card">
            <h3>STEM Innovation Scholarship</h3>

            <p class="match">95% Match</p>

            <p>
            Why you matched:
            <br>
            ✓ Computer Science interest
            <br>
            ✓ Technology-focused goals
            <br>
            ✓ Project-based experience
            </p>

            <br>

            <b>Recommended next step:</b>
            Build and document a technology project.
        </div>
        `;

    }


    if (interest === "Engineering") {

        matches += `
        <div class="card">

            <h3>Future Engineers Award</h3>

            <p class="match">90% Match</p>

            <p>
            Why you matched:
            <br>
            ✓ Engineering interest
            <br>
            ✓ Problem-solving focus
            </p>

            <br>

            <b>Recommended next step:</b>
            Participate in engineering challenges.

        </div>
        `;

    }



    if (interest === "Medicine") {

        matches += `
        <div class="card">

            <h3>Healthcare Leaders Scholarship</h3>

            <p class="match">88% Match</p>

            <p>
            Why you matched:
            <br>
            ✓ Medicine interest
            <br>
            ✓ Healthcare pathway
            </p>

            <br>

            <b>Recommended next step:</b>
            Explore research and volunteering opportunities.

        </div>
        `;

    }



    if (strength === "Leadership") {

        matches += `
        <div class="card">

            <h3>Global Leadership Scholarship</h3>

            <p class="match">85% Match</p>

            <p>
            Why you matched:
            <br>
            ✓ Leadership experience
            <br>
            ✓ Community involvement
            </p>

            <br>

            <b>Recommended next step:</b>
            Document your leadership impact.

        </div>
        `;

    }



    if (strength === "Research") {

        matches += `
        <div class="card">

            <h3>Young Researchers Program</h3>

            <p class="match">82% Match</p>

            <p>
            Why you matched:
            <br>
            ✓ Research interest
            <br>
            ✓ Academic curiosity
            </p>

            <br>

            <b>Recommended next step:</b>
            Create a research portfolio.

        </div>
        `;

    }



    if (matches === "") {

        matches = `
        <div class="card">

        <h3>No exact matches yet</h3>

        <p>
        Try adding more activities and interests
        to improve your matches.
        </p>

        </div>
        `;

    }


    document.getElementById("matches").innerHTML = matches;


    document.getElementById("results").classList.remove("hidden");


    window.scrollTo({
        top: document.getElementById("results").offsetTop,
        behavior: "smooth"
    });

}
