.grid {
	max-width: 69em;
	list-style: none;
	margin: 30px auto;
	padding: 0;
}

.grid li {
	display: block;
	float: left;
	padding: 7px;
	width: 33%;
	opacity: 0;
}

.grid li.shown,
.no-js .grid li,
.no-cssanimations .grid li {
	opacity: 1;
}

.grid li a,
.grid li img {
	outline: none;
	border: none;
	display: block;
	max-width: 100%;
}

/* Effect 1: opacity */
.grid.effect-1 li.animate {
	-webkit-animation: fadeIn 0.65s ease forwards;
	animation: fadeIn 0.65s ease forwards;
}

@-webkit-keyframes fadeIn {
	0% { }
	100% { opacity: 1; }
}

@keyframes fadeIn {
	0% { }
	100% { opacity: 1; }
}

/* Effect 2: Move Up */
.grid.effect-2 li.animate {
	-webkit-transform: translateY(200px);
	transform: translateY(200px);
	-webkit-animation: moveUp 0.65s ease forwards;
	animation: moveUp 0.65s ease forwards;
}

@-webkit-keyframes moveUp {
	0% { }
	100% { -webkit-transform: translateY(0); opacity: 1; }
}

@keyframes moveUp {
	0% { }
	100% { -webkit-transform: translateY(0); transform: translateY(0); opacity: 1; }
}

/* Effect 3: Scale up */
.grid.effect-3 li.animate {
	-webkit-transform: scale(0.6);
	transform: scale(0.6);
	-webkit-animation: scaleUp 0.65s ease-in-out forwards;
	animation: scaleUp 0.65s ease-in-out forwards;
}

@-webkit-keyframes scaleUp {
	0% { }
	100% { -webkit-transform: scale(1); opacity: 1; }
}

@keyframes scaleUp {
	0% { }
	100% { -webkit-transform: scale(1); transform: scale(1); opacity: 1; }
}

/* Effect 4: fall perspective */
.grid.effect-4 {
	-webkit-perspective: 1300px;
	perspective: 1300px;
}

.grid.effect-4 li.animate {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transform: translateZ(400px) translateY(300px) rotateX(-90deg);
	transform: translateZ(400px) translateY(300px) rotateX(-90deg);
	-webkit-animation: fallPerspective .8s ease-in-out forwards;
	animation: fallPerspective .8s ease-in-out forwards;
}

@-webkit-keyframes fallPerspective {
	0% { }
	100% { -webkit-transform: translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1; }
}

@keyframes fallPerspective {
	0% { }
	100% { -webkit-transform: translateZ(0px) translateY(0px) rotateX(0deg); transform: translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1; }
}

/* Effect 5: fly (based on http://lab.hakim.se/scroll-effects/ by @hakimel) */
.grid.effect-5 {
	-webkit-perspective: 1300px;
	perspective: 1300px;
}

.grid.effect-5 li.animate {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transform-origin: 50% 50% -300px;
	transform-origin: 50% 50% -300px;
	-webkit-transform: rotateX(-180deg);
	transform: rotateX(-180deg);
	-webkit-animation: fly .8s ease-in-out forwards;
	animation: fly .8s ease-in-out forwards;
}

@-webkit-keyframes fly {
	0% { }
	100% { -webkit-transform: rotateX(0deg); opacity: 1; }
}

@keyframes fly {
	0% { }
	100% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); opacity: 1; }
}

/* Effect 6: flip (based on http://lab.hakim.se/scroll-effects/ by @hakimel) */
.grid.effect-6 {
	-webkit-perspective: 1300px;
	perspective: 1300px;
}

.grid.effect-6 li.animate {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transform-origin: 0% 0%;
	transform-origin: 0% 0%;
	-webkit-transform: rotateX(-80deg);
	transform: rotateX(-80deg);
	-webkit-animation: flip .8s ease-in-out forwards;
	animation: flip .8s ease-in-out forwards;
}

@-webkit-keyframes flip {
	0% { }
	100% { -webkit-transform: rotateX(0deg); opacity: 1; }
}

@keyframes flip {
	0% { }
	100% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); opacity: 1; }
}

/* Effect 7: helix (based on http://lab.hakim.se/scroll-effects/ by @hakimel) */
.grid.effect-7 {
	-webkit-perspective: 1300px;
	perspective: 1300px;
}

.grid.effect-7 li.animate {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transform: rotateY(-180deg);
	transform: rotateY(-180deg);
	-webkit-animation: helix .8s ease-in-out forwards;
	animation: helix .8s ease-in-out forwards;
}

@-webkit-keyframes helix {
	0% { }
	100% { -webkit-transform: rotateY(0deg); opacity: 1; }
}

@keyframes helix {
	0% { }
	100% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); opacity: 1; }
}

/* Effect 8:  */
.grid.effect-8 {
	-webkit-perspective: 1300px;
	perspective: 1300px;
}

.grid.effect-8 li.animate {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transform: scale(0.4);
	transform: scale(0.4);
	-webkit-animation: popUp .8s ease-in forwards;
	animation: popUp .8s ease-in forwards;
}

@-webkit-keyframes popUp {
	0% { }
	70% { -webkit-transform: scale(1.1); opacity: .8; -webkit-animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(1); opacity: 1; }
}

@keyframes popUp {
	0% { }
	70% { -webkit-transform: scale(1.1); transform: scale(1.1); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(1); transform: scale(1); opacity: 1; }
}

@media screen and (max-width: 900px) {
	.grid li {
		width: 50%;
	}
}

@media screen and (max-width: 400px) {
	.grid li {
		width: 100%;
	}
}
