const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#b5b5b5")
document.body.appendChild( renderer.domElement )
camera.position.z = 5

// resize canvas on resize window
window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

// basic sphere
var geometry = new THREE.SphereGeometry( 1, 15, 15)
var material = new THREE.MeshStandardMaterial( { color: 0xff005165cdc2, flatShading: true, metalness: .8, roughness: 1 })
var sphere = new THREE.Mesh ( geometry, material )
scene.add( sphere )

// wireframe cube
var geometry = new THREE.CylinderGeometry( 2, 2, 5)
var material = new THREE.MeshBasicMaterial( {
	color: "#", wireframe: true, transparent: true
})
var wireframeCylinder = new THREE.Mesh ( geometry, material )
scene.add( wireframeCylinder )

// ambient light
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

// point light
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );


function animate() {
	requestAnimationFrame( animate )
	sphere.rotation.x += 0.04;
	sphere.rotation.y += 0.04;
	wireframeCylinder.rotation.x -= 0.01;
	wireframeCylinder.rotation.y -= 0.01;
	renderer.render( scene, camera )
}
animate()