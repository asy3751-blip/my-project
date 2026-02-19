const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>3D Interaction</title>
    <style>body { margin: 0; background: #000; overflow: hidden; }</style>
</head>
<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
    <script>
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;

        // تفعيل التحكم الكامل
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; 

        function animate() {
            requestAnimationFrame(animate);
            controls.update(); 
            renderer.render(scene, camera);
        }
        animate();
    </script>
</body>
</html>
`;

fs.writeFileSync('index.html', htmlContent);
console.log('✅ تم تحديث الكود! جرب التدوير الآن في المتصفح.');
