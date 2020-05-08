/**
 * --------------------------------------------------------------------------
 * JS for website using Gimel.js (c) 2020 Noah Rahm.
 * Licensed under BSD 3-Clause
 * --------------------------------------------------------------------------
 */

$g.fadeIn("#heroHeader", "translate", "(-14rem, -4rem)");
$g.fadeIn(".code-block", "rotate3d", "(2, 14, 5, -300deg)");

$g.when("window", "load", function() {
    $g.fadeInStart("#heroHeader", "translate", 1.1);
    $g.whenTimeUp(500, function() {
        $g.typingEffect(
            "#heroSubheader", 
            "Free & Open-Source Javascript Library for DOM Manipulation & Effects",
            30
        );
    });
});

$g.whenScrollTo("#includejs", function() {
  $g.fadeInStart(".code-block", "rotate3d", 2);
});