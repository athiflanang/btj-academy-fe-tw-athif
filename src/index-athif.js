// password command
$(document).ready(function() {
    $("#form").submit(function(e) {
        e.preventDefault();
        let username = $("#username").val();
        let password = $("#password").val();

        let errorname = "";
        let errorpassword = "";

        if (username.trim() === "") {
            errorname = "Name cannot be empty";
        }

        if (password === '') {
            errorpassword = "Password cannot be empty";
        } else if (password.length < 6) {
            errorpassword = "Password needs to be at minimal 6 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]/.test(password)) {
            errorpassword = "Password must contain 1 lowercase, 1 uppercase, and 1 number";
        }

        $("#errorname").text(errorname);
        $("#errorpassword").text(errorpassword);

        // dummyjson command
        if (errorname === "" && errorpassword === "") {
            
            $.ajax({
                url: "https://dummyjson.com/auth/login",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    username: username,
                    password: password,
                }),
                statusCode: {
                    200: () => {
                        alert("Login Successful")
                        window.location.href = "about-athif.html";
                    },
                },
                error: () => {
                    alert("Login Failed, Please Check Your Username and Password")
                    $("#username").val("")
                    $("#password").val("")
                }
            });
        }
    });

    // show password command
    $(document).ready(function() {
        $("#showPasswordcheckbox").on("change", function() {
            let isChecked = $(this).is(":checked");
            let passwordField = $("#password");
            passwordField.attr("type", isChecked ? "text" : "password");
        }); 

    // command caps lock
    $("#password").on("keyup", function(event) {
        let capsLockWarning = $("#capsLockWarning");
        event.originalEvent.getModifierState("CapsLock")
            ? (capsLockWarning.css("display", "block"))
            : (capsLockWarning.css("display", "none"));
    });

    // command rotate animation logo
    let degree = 0;
    function rotateLogo() {
        let logoImage = $("#logo-rotated");
        logoImage.css("transition", "transform 1s ease-in-out");

        degree += 360;
        logoImage.css("transform", `rotate(${degree}deg)`);
    }

    $("#logo-rotated").on("click", function() {
        rotateLogo();
    });
});
})
