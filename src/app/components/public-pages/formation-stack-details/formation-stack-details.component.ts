import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormationStack } from '../../../data/models/offense';
import { ConceptService, FormationService, FormationStackService, OffensePlayService } from '../../../data/services/offense';
import { LoaderService } from '../../../shared/services/loader.service';
import { OffensePublicService } from '../../../data/services/offense-public/offense-public.service';
import { UrlSharingService } from '../../../data/services/global/url-sharing.service';
import { CommonModule } from '@angular/common';
declare var FB: any;
import { ActionManager, ArcRotateCamera, AxisDragGizmo, Color3, Color4, Engine, ExecuteCodeAction, HemisphericLight, Mesh, MeshBuilder, PhotoDome, PointerEventTypes, Scene, StandardMaterial, Texture, UtilityLayerRenderer, Vector3 } from 'babylonjs';
import { GridMaterial } from 'babylonjs-materials';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-formation-stack-details',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './formation-stack-details.component.html',
    styleUrls: ['./formation-stack-details.component.css']
})
export class FormationStackDetailsComponent implements OnInit {
    [x: string]: any;

    gridHeight: number = 30;
    rightHashMarkVertical: number = 8.127492;
    sidelineVertical: number = 24.333;
    fiveYardlineDistance: number = 4.572;

    showNavigationArrows = false;
    showNavigationIndicators = false;
    img = ['assets/test-img/638042580095444718.jpg', 'assets/test-img/638073960550684177.PNG', 'assets/test-img/638084886242877223.jpg', 'assets/test-img/638042561409534213.jpg']

    @ViewChild('canvas', { static: true })
    canvas!: ElementRef<HTMLCanvasElement>;

    @ViewChild('canvas2', { static: true })
    canvas2!: ElementRef<HTMLCanvasElement>;

    @ViewChild('canvas3', { static: true })
    canvas3!: ElementRef<HTMLCanvasElement>;

    @ViewChild('canvas4', { static: true })
    canvas4!: ElementRef<HTMLCanvasElement>;

    @ViewChild('screen', { static: true }) screen: any;

    @Output()
    engine!: Engine;
    @Output()
    oppEngine!: Engine;

    @Output()
    engineScreenShoot!: Engine;
    @Output()
    oppengineScreenShoot!: Engine;

    @Output()
    scene!: Scene;
    @Output()
    oppScene!: Scene;

    @Output()
    screenShootScene!: Scene;
    @Output()
    oppscreenShootScene!: Scene;

    @Output()
    camera!: ArcRotateCamera;
    @Output()
    oppCamera!: ArcRotateCamera;

    @Output()
    screenShootCamera!: ArcRotateCamera;
    @Output()
    oppscreenShootCamera!: ArcRotateCamera;

    sphere: any = [];
    oopSphere: any = [];
    screenSphere: any[] = [];
    oppscreenSphere: any[] = [];
    X_gizmo: any;
    Z_gizmo: any;
    utilLayer: any;

    playreDefaultPosition = [
        { x: 0, y: -1 },
        { x: -1.18, y: -1.4 },
        { x: 1.18, y: -1.4 },
        { x: -2.5, y: - 1.4 },
        { x: 2.5, y: -1.4 },
        { x: 0.09549999, y: -5.26 },
        { x: 2.54, y: - 5.9 },
        { x: -11.16, y: -1.66 },
        { x: -16.23, y: -0.9 },
        { x: 16.23, y: -1.66 },
        { x: 3.62, y: -0.9 }
    ];

    oppPlayreDefaultPosition = [
        { x: 0, y: -1 },
        { x: 1.18, y: -1.4 },
        { x: -1.18, y: -1.4 },
        { x: 2.5, y: - 1.4 },
        { x: -2.5, y: -1.4 },
        { x: -0.09549999, y: -5.26 },
        { x: -2.54, y: - 5.9 },
        { x: 11.16, y: -1.66 },
        { x: 16.23, y: -0.9 },
        { x: -16.23, y: -1.66 },
        { x: -3.62, y: -0.9 }
    ];

    position = 0;
    playerIndex = this.position;

    items: any[] = ['Offense', 'Formation Stack'];
    id: any;
    refTab: any = '';
    archiveStatus: string = "";
    isArchive: boolean = false;

    public formationStack: FormationStack;
    showImage: boolean = true;
    images: any[] = [];
    relatedVideos: any[] = [];
    relatedImages: any[] = [];
    relatedVideosCount = 0;
    relatedImagesCount = 0;
    itemCount = 5;

    page1 = 0;
    page2 = 0;
    page3 = 0;
    page4 = 0;
    limit = 0;
    limit2 = 0;
    tmpRelatedImages: any[] = [];
    tmpRelatedVideos: any[] = [];
    formationSetImages: any[] = [];
    formationSetVideos: any[] = [];
    @ViewChild("videoViewcontent", { static: true })
    videoViewcontent!: ElementRef<HTMLElement>;
    defaultRelatedVideos: any[] = [];
    defaultRelatedImages: any[] = [];
    loadMoreIconshow: boolean = false;
    @ViewChild('shareModal', { static: true })
    shareModal!: ElementRef<HTMLElement>;
    public shareUrl: string = "";
    public whatsAppshareUrl: string = "";
    public instagramShareUrl: string = "";
    public twitterShareUrl: string = "";
    playbookId: any;
    modalData: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public toster: ToastrService,
        private formationStackService: FormationStackService,
        private modalService: NgbModal,
        private loaderService: LoaderService,
        carouselconfig: NgbCarouselConfig,
        private offensePublicService: OffensePublicService,
        private playService: OffensePlayService,
        private formationService: FormationService,
        private conceptService: ConceptService,
        private urlSharingService: UrlSharingService
    ) {
        this.formationStack = new FormationStack();
        // customize default values of carousels used by this component tree
        carouselconfig.showNavigationArrows = true;
        carouselconfig.showNavigationIndicators = false;
        // customize default values of carousels used by this component tree
        carouselconfig.interval = 0;
        carouselconfig.wrap = false;
        carouselconfig.keyboard = false;
        carouselconfig.pauseOnHover = true;
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.refTab = this.route.snapshot.paramMap.get('ref');

        this.engine = new Engine(this.canvas.nativeElement, true, { preserveDrawingBuffer: true, stencil: true });
        this.scene = new Scene(this.engine);

        this.oppEngine = new Engine(this.canvas2.nativeElement, true, { preserveDrawingBuffer: true, stencil: true });
        this.oppScene = new Scene(this.oppEngine);

        this.engineScreenShoot = new Engine(this.canvas3.nativeElement, true, { preserveDrawingBuffer: true, stencil: true });
        this.screenShootScene = new Scene(this.engineScreenShoot);

        this.oppengineScreenShoot = new Engine(this.canvas4.nativeElement, true, { preserveDrawingBuffer: true, stencil: true });
        this.oppscreenShootScene = new Scene(this.oppengineScreenShoot);

        // creating camera
        this.camera = this.createCamera(this.scene);
        this.oppCamera = this.createCamera(this.oppScene);

        this.screenShootCamera = this.createMyCamera(this.screenShootScene);
        this.oppscreenShootCamera = this.createMyCamera(this.oppscreenShootScene);

        // allow mouse deplacement
        this.camera.attachControl(this.canvas.nativeElement, true);
        this.oppCamera.attachControl(this.canvas2.nativeElement, true);
        this.screenShootCamera.attachControl(this.canvas3.nativeElement, true);
        this.oppscreenShootCamera.attachControl(this.canvas4.nativeElement, true);

        // creating minimal scean
        this.createScene(this.scene, this.canvas.nativeElement);
        this.createOppScene(this.oppScene, this.canvas2.nativeElement);

        this.createScreenShootScene(this.screenShootScene, this.canvas3.nativeElement);
        this.createOppScreenShootScene(this.oppscreenShootScene, this.canvas4.nativeElement);

        // running babylonJS
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
        // running babylonJS
        this.oppEngine.runRenderLoop(() => {
            this.oppScene.render();
        });

        this.engineScreenShoot.runRenderLoop(() => {
            this.screenShootScene.render();
        });
        this.oppengineScreenShoot.runRenderLoop(() => {
            this.oppscreenShootScene.render();
        });

        this.playbookId = this.route.snapshot.paramMap.get('playbookId');
        this.refTab = this.route.snapshot.paramMap.get('ref');
        if (this.id) {
            this.loaderService.isLoading.next(true);
            this.offensePublicService.getPublicFormationSetView(this.id).subscribe(data => {
                this.loaderService.isLoading.next(false);
                this.formationStack = data;

                if (data.playerPositions && data.playerPositions.length > 0) {
                    data.playerPositions.forEach((value: any) => {
                        var playerPos: any;
                        playerPos = value;
                        this.playerIndex = playerPos.playerIndex;
                        this.createSphere('sphere' + playerPos.playerIndex, playerPos.position.x, playerPos.position.y);
                        this.createscreenShootSphere('screensphere' + playerPos.playerIndex, playerPos.position.x, playerPos.position.y);
                        this.playreDefaultPosition.shift();
                    });
                }

                if (data.oppPlayerPositions && data.oppPlayerPositions.length > 0) {
                    data.oppPlayerPositions.forEach((value: any) => {
                        var oopPlayerPos: any;
                        oopPlayerPos = value;
                        this.playerIndex = oopPlayerPos.playerIndex;
                        this.createOopSphere('oopsphere' + oopPlayerPos.playerIndex, oopPlayerPos.position.x, oopPlayerPos.position.y);
                        this.createscreenShootOopSphere('screenoopsphere' + oopPlayerPos.playerIndex, oopPlayerPos.position.x, oopPlayerPos.position.y);
                        this.oppPlayreDefaultPosition.shift();
                    });
                }
                else {
                    if (data.playerPositions && data.playerPositions.length > 0) {
                        data.playerPositions.forEach((value: any) => {
                            var oopPlayerPos: any;
                            oopPlayerPos = value;
                            this.playerIndex = oopPlayerPos.playerIndex;
                            this.createOopSphere('oopsphere' + oopPlayerPos.playerIndex, oopPlayerPos.position.x * -1, oopPlayerPos.position.y);
                            this.createscreenShootOopSphere('screenoopsphere' + oopPlayerPos.playerIndex, oopPlayerPos.position.x * -1, oopPlayerPos.position.y);
                            this.oppPlayreDefaultPosition.shift();
                        });
                    }
                }
            });

            this.getPlaysName();
        } else {

            for (let i = 0; i <= 10; i++) {
                this.addPlayer();
            }
        }
    }

    changeShowOption() {
        this.showImage = !this.showImage;
    };

    createCamera(scene: Scene) {
        const camera = new ArcRotateCamera('camera1', -Math.PI / 2, Math.PI / 2.5, 10, new Vector3(0, 3, -6), scene);

        camera.setTarget(Vector3.Zero());
        camera.lowerBetaLimit = 0.1;
        camera.upperBetaLimit = (Math.PI / 2) * 0.9;
        //camera.upperBetaLimit = 0;
        camera.lowerRadiusLimit = 10;
        camera.upperRadiusLimit = 150;

        return camera;
    };

    createMyCamera(scene: Scene) {
        const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 10, new Vector3(0, 3, -6), scene);
        camera.setTarget(Vector3.Zero());
        camera.lockedTarget = (Vector3.Zero());

        camera.inputs.addMouseWheel();
        camera.lowerRadiusLimit = 40;
        camera.upperRadiusLimit = 40;
        camera.lowerAlphaLimit = 0;
        camera.upperAlphaLimit = 0;
        camera.lowerBetaLimit = 0;
        camera.upperBetaLimit = 0;

        return camera;
    };

    createScene(scene: Scene, canvas: HTMLCanvasElement) {
        this.utilLayer = new UtilityLayerRenderer(scene);
        const light = new HemisphericLight('light', new Vector3(1, 1, 0), scene);
        light.intensity = 0.9;

        //For Ground
        var material2 = new StandardMaterial('material2', scene);
        material2.ambientTexture = new Texture('assets/images/football-ground.png', scene);

        // const hdrTexture = CubeTexture.CreateFromPrefilteredData('assets/images/environment.dds', scene);
        // this.currentSkybox = scene.createDefaultSkybox(hdrTexture, true);

        let dome = new PhotoDome(
            "testdome",
            "assets/images/strongsidebg.jpg",
            {
                resolution: 32,
                size: 1000
            },
            scene
        );

        var ground = Mesh.CreateGround('ground', 62, 110, 1, scene);
        ground.material = material2;

        scene.onPointerObservable.add((PointerInfo) => {
            switch (PointerInfo.type) {
                case PointerEventTypes.POINTERDOWN:
                    if (PointerInfo.pickInfo?.hit) {
                        this.pointerDown();
                    }
                    break;
            }
        });
        scene.clearColor = Color4.FromHexString('#FFFFFF');
    };

    createOppScene(scene: Scene, canvas: HTMLCanvasElement) {
        //this.utilLayer = new UtilityLayerRenderer(scene);
        const light2 = new HemisphericLight('light2', new Vector3(1, 1, 0), scene);
        light2.intensity = 0.9;

        //For Ground
        var material2 = new StandardMaterial('material2', scene);
        material2.ambientTexture = new Texture('assets/images/football-ground.png', scene);

        let dome = new PhotoDome(
            "testdome",
            "assets/images/strongsidebg.jpg",
            {
                resolution: 32,
                size: 1000
            },
            scene
        );

        var ground = Mesh.CreateGround('ground', 62, 110, 1, scene);
        ground.material = material2;
        scene.clearColor = Color4.FromHexString('#FFFFFF');
    };

    createScreenShootScene(scene: Scene, canvas: HTMLCanvasElement) {
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        const strongsideDarkMetalColor: Color3 = Color3.FromHexString('#122C34');
        const strongsideTurquiseColor: Color3 = Color3.FromHexString("#44CFCB");

        const groundMaterial = new GridMaterial("groundMaterial", scene);
        groundMaterial.majorUnitFrequency = 0;
        groundMaterial.minorUnitVisibility = 0.1;
        groundMaterial.gridRatio = .90;
        groundMaterial.backFaceCulling = false;
        groundMaterial.mainColor = new Color3(0, 0, 0);
        //groundMaterial.lineColor = this.strongsideTurquiseColor;
        groundMaterial.lineColor = new Color3(0, 0, 0);
        groundMaterial.opacity = .991;

        const myMaterial = new StandardMaterial("myMaterial", scene);

        myMaterial.diffuseColor = strongsideDarkMetalColor;
        myMaterial.specularColor = new Color3(1, 1, 1);
        myMaterial.emissiveColor = strongsideDarkMetalColor;
        myMaterial.ambientColor = new Color3(1, 1, 1);

        //Ground
        //const ground = MeshBuilder.CreateGround("ground", { width: this.gridHeight, height: 50 }, scene);
        const ground = Mesh.CreateGround("ground", this.gridHeight, 50, 1, scene);
        ground.material = groundMaterial;

        const myLines = [
            [
                //right Sideline
                new Vector3(this.gridHeight * -.5, .03, this.sidelineVertical),
                new Vector3(this.gridHeight * .5, 0, this.sidelineVertical),
            ],
            [
                //left Sideline
                //left is just inverse of right
                new Vector3(this.gridHeight * -.5, .03, this.sidelineVertical * -1),
                new Vector3(this.gridHeight * .5, 0, this.sidelineVertical * -1),
            ],
            [
                //10yardline marker
                new Vector3(0, .03, this.sidelineVertical),
                new Vector3(0, 0, this.sidelineVertical * -1),
            ],
            [
                //5yardline marker
                new Vector3(this.fiveYardlineDistance, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance, 0, this.sidelineVertical * -1),
            ],
            [
                //10yardline marker
                new Vector3(this.fiveYardlineDistance * 2, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance * 2, 0, this.sidelineVertical * -1),
            ],
            [
                //10yardline marker
                new Vector3(this.fiveYardlineDistance * 3, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance * 3, 0, this.sidelineVertical * -1),
            ],
            [
                //create the other 10 yard markers * -1
                new Vector3(this.fiveYardlineDistance * -1, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance * -1, 0, this.sidelineVertical * -1),
            ],
            [
                //yardline markers 
                new Vector3(this.fiveYardlineDistance * -2, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance * -2, 0, this.sidelineVertical * -1),
            ],
            [
                //yardline markers
                new Vector3(this.fiveYardlineDistance * -3, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance * -3, 0, this.sidelineVertical * -1),
            ]
        ];

        const linesystem = MeshBuilder.CreateLineSystem("linesystem", { lines: myLines }, scene);
        linesystem.color = Color3.Black();

        // lineArrayforHashMarksRight
        let lineArrayforHashMarksRight = [];
        for (let i = 0; i < this.gridHeight; i += 1) {
            let lineXaxes = -.9144 * i - (this.gridHeight / 2 * -.9144);
            let newvector3lines = [];
            let newVectorLeft = new Vector3(lineXaxes, 0, 7.867498);
            let newVectorRight = new Vector3(lineXaxes, 0, 8.467498);
            newvector3lines.push(newVectorLeft);
            newvector3lines.push(newVectorRight);

            lineArrayforHashMarksRight.push(newvector3lines);
        }
        const RHlines = lineArrayforHashMarksRight;
        const linesystemRH = MeshBuilder.CreateLineSystem("linesystem2", { lines: RHlines }, scene);
        linesystemRH.color = Color3.Black();

        // lineArrayforHashMarksLeft
        let lineArrayforHashMarksLeft = [];
        for (let i = 0; i < this.gridHeight; i += 1) {
            //create a new vector3 for every 1 distance from gridheight
            let lineXaxes = -.9144 * i - (this.gridHeight / 2 * -.9144);
            let newvector3lines = [];
            let newVectorLeft = new Vector3(lineXaxes, 0, -7.867498);
            let newVectorRight = new Vector3(lineXaxes, 0, -8.467498);
            newvector3lines.push(newVectorLeft);
            newvector3lines.push(newVectorRight);

            lineArrayforHashMarksLeft.push(newvector3lines);
        }
        const LHlines = lineArrayforHashMarksLeft;
        const linesystemLH = MeshBuilder.CreateLineSystem("linesystem3", { lines: LHlines }, scene);
        linesystemLH.color = Color3.Black();

        //lineArrayforSidelineRight
        let lineArrayforSidelineRight = [];
        for (let i = 0; i < this.gridHeight; i += 1) {
            //create a new vector3 for every 1 distance from gridheight
            let lineXaxes = -.9144 * i - (this.gridHeight / 2 * -.9144);
            let newvector3lines = [];
            let newVectorLeft = new Vector3(lineXaxes, 0, 24.3333);
            let newVectorRight = new Vector3(lineXaxes, 0, 23.723);
            newvector3lines.push(newVectorLeft);
            newvector3lines.push(newVectorRight);

            lineArrayforSidelineRight.push(newvector3lines);
        }
        const RSlines = lineArrayforSidelineRight;
        const linesystemRS = MeshBuilder.CreateLineSystem("linesystem4", { lines: RSlines }, scene);
        linesystemRS.color = Color3.Black();

        //lineArrayforSidelineLeft
        let lineArrayforSidelineLeft = [];
        for (let i = 0; i < this.gridHeight; i += 1) {
            //create a new vector3 for every 1 distance from gridheight
            let lineXaxes = -.9144 * i - (this.gridHeight / 2 * -.9144);
            let newvector3lines = [];
            let newVectorLeft = new Vector3(lineXaxes, 0, -24.3333);
            let newVectorRight = new Vector3(lineXaxes, 0, -23.723);
            newvector3lines.push(newVectorLeft);
            newvector3lines.push(newVectorRight);

            lineArrayforSidelineLeft.push(newvector3lines);
        }
        const LSlines = lineArrayforSidelineLeft;
        const linesystemLS = MeshBuilder.CreateLineSystem("linesystem5", { lines: LSlines }, scene);
        linesystemLS.color = Color3.Black();

        ground.isVisible = false;
        scene.clearColor = Color4.FromHexString('#FFFFFF');
    };

    createOppScreenShootScene(scene: Scene, canvas: HTMLCanvasElement) {
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        const strongsideDarkMetalColor: Color3 = Color3.FromHexString('#122C34');
        const strongsideTurquiseColor: Color3 = Color3.FromHexString("#44CFCB");

        const groundMaterial = new GridMaterial("groundMaterial", scene);
        groundMaterial.majorUnitFrequency = 0;
        groundMaterial.minorUnitVisibility = 0.1;
        groundMaterial.gridRatio = .90;
        groundMaterial.backFaceCulling = false;
        groundMaterial.mainColor = new Color3(0, 0, 0);
        //groundMaterial.lineColor = this.strongsideTurquiseColor;
        groundMaterial.lineColor = new Color3(0, 0, 0);
        groundMaterial.opacity = .991;

        const myMaterial = new StandardMaterial("myMaterial", scene);

        myMaterial.diffuseColor = strongsideDarkMetalColor;
        myMaterial.specularColor = new Color3(1, 1, 1);
        myMaterial.emissiveColor = strongsideDarkMetalColor;
        myMaterial.ambientColor = new Color3(1, 1, 1);

        //Ground
        const ground = MeshBuilder.CreateGround("ground", { width: this.gridHeight, height: 50 }, scene);
        ground.material = groundMaterial;

        const myLines = [
            [
                //right Sideline
                new Vector3(this.gridHeight * -.5, .03, this.sidelineVertical),
                new Vector3(this.gridHeight * .5, 0, this.sidelineVertical),
            ],
            [
                //left Sideline
                //left is just inverse of right
                new Vector3(this.gridHeight * -.5, .03, this.sidelineVertical * -1),
                new Vector3(this.gridHeight * .5, 0, this.sidelineVertical * -1),
            ],
            [
                //10yardline marker
                new Vector3(0, .03, this.sidelineVertical),
                new Vector3(0, 0, this.sidelineVertical * -1),
            ],
            [
                //5yardline marker
                new Vector3(this.fiveYardlineDistance, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance, 0, this.sidelineVertical * -1),
            ],
            [
                //10yardline marker
                new Vector3(this.fiveYardlineDistance * 2, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance * 2, 0, this.sidelineVertical * -1),
            ],
            [
                //10yardline marker
                new Vector3(this.fiveYardlineDistance * 3, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance * 3, 0, this.sidelineVertical * -1),
            ],
            [
                //create the other 10 yard markers * -1
                new Vector3(this.fiveYardlineDistance * -1, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance * -1, 0, this.sidelineVertical * -1),
            ],
            [
                //yardline markers 
                new Vector3(this.fiveYardlineDistance * -2, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance * -2, 0, this.sidelineVertical * -1),
            ],
            [
                //yardline markers
                new Vector3(this.fiveYardlineDistance * -3, .03, this.sidelineVertical),
                new Vector3(this.fiveYardlineDistance * -3, 0, this.sidelineVertical * -1),
            ]
        ];

        const linesystem = MeshBuilder.CreateLineSystem("linesystem", { lines: myLines }, scene);
        linesystem.color = Color3.Black();

        // lineArrayforHashMarksRight
        let lineArrayforHashMarksRight = [];
        for (let i = 0; i < this.gridHeight; i += 1) {
            let lineXaxes = -.9144 * i - (this.gridHeight / 2 * -.9144);
            let newvector3lines = [];
            let newVectorLeft = new Vector3(lineXaxes, 0, 7.867498);
            let newVectorRight = new Vector3(lineXaxes, 0, 8.467498);
            newvector3lines.push(newVectorLeft);
            newvector3lines.push(newVectorRight);

            lineArrayforHashMarksRight.push(newvector3lines);
        }
        const RHlines = lineArrayforHashMarksRight;
        const linesystemRH = MeshBuilder.CreateLineSystem("linesystem2", { lines: RHlines }, scene);
        linesystemRH.color = Color3.Black();

        // lineArrayforHashMarksLeft
        let lineArrayforHashMarksLeft = [];
        for (let i = 0; i < this.gridHeight; i += 1) {
            //create a new vector3 for every 1 distance from gridheight
            let lineXaxes = -.9144 * i - (this.gridHeight / 2 * -.9144);
            let newvector3lines = [];
            let newVectorLeft = new Vector3(lineXaxes, 0, -7.867498);
            let newVectorRight = new Vector3(lineXaxes, 0, -8.467498);
            newvector3lines.push(newVectorLeft);
            newvector3lines.push(newVectorRight);

            lineArrayforHashMarksLeft.push(newvector3lines);
        }
        const LHlines = lineArrayforHashMarksLeft;
        const linesystemLH = MeshBuilder.CreateLineSystem("linesystem3", { lines: LHlines }, scene);
        linesystemLH.color = Color3.Black();

        //lineArrayforSidelineRight
        let lineArrayforSidelineRight = [];
        for (let i = 0; i < this.gridHeight; i += 1) {
            //create a new vector3 for every 1 distance from gridheight
            let lineXaxes = -.9144 * i - (this.gridHeight / 2 * -.9144);
            let newvector3lines = [];
            let newVectorLeft = new Vector3(lineXaxes, 0, 24.3333);
            let newVectorRight = new Vector3(lineXaxes, 0, 23.723);
            newvector3lines.push(newVectorLeft);
            newvector3lines.push(newVectorRight);

            lineArrayforSidelineRight.push(newvector3lines);
        }
        const RSlines = lineArrayforSidelineRight;
        const linesystemRS = MeshBuilder.CreateLineSystem("linesystem4", { lines: RSlines }, scene);
        linesystemRS.color = Color3.Black();

        //lineArrayforSidelineLeft
        let lineArrayforSidelineLeft = [];
        for (let i = 0; i < this.gridHeight; i += 1) {
            //create a new vector3 for every 1 distance from gridheight
            let lineXaxes = -.9144 * i - (this.gridHeight / 2 * -.9144);
            let newvector3lines = [];
            let newVectorLeft = new Vector3(lineXaxes, 0, -24.3333);
            let newVectorRight = new Vector3(lineXaxes, 0, -23.723);
            newvector3lines.push(newVectorLeft);
            newvector3lines.push(newVectorRight);

            lineArrayforSidelineLeft.push(newvector3lines);
        }
        const LSlines = lineArrayforSidelineLeft;
        const linesystemLS = MeshBuilder.CreateLineSystem("linesystem5", { lines: LSlines }, scene);
        linesystemLS.color = Color3.Black();

        ground.isVisible = false;
        scene.clearColor = Color4.FromHexString('#FFFFFF');
    };

    addPlayer() {
        //this.materialPlayer.ambientTexture = new Texture('assets/images/test-player.png', this.scene);
        if (this.playreDefaultPosition.length != this.position) {
            var playerPos = this.playreDefaultPosition[this.position];
            var oopPlayerPos = this.oppPlayreDefaultPosition[this.position];
            this.createSphere('sphere' + this.playerIndex, playerPos.x, playerPos.y);
            this.createscreenShootSphere('screensphere' + this.playerIndex, playerPos.x, playerPos.y);
            this.createOopSphere('oopsphere' + this.playerIndex, oopPlayerPos.x, oopPlayerPos.y);
            this.createscreenShootOopSphere('screenoopsphere' + this.playerIndex, oopPlayerPos.x, oopPlayerPos.y);
            this.playreDefaultPosition.shift();
            this.oppPlayreDefaultPosition.shift();
        } else {
            Swal.fire(
                'Wow! Perfect',
                'All players are added to the field.',
                'success'
            )
        }
        this.playerIndex++;
    };

    createSphere(name: string, x: number, y: number) {
        this.sphere[this.playerIndex] = Mesh.CreateSphere(name, 32, 1, this.scene);
        this.sphere[this.playerIndex].position = new Vector3(x, 0.5, y);
        var material3 = new StandardMaterial('material3', this.scene);
        material3.ambientTexture = new Texture('assets/images/blue-txture.jpg', this.scene);
        this.sphere[this.playerIndex].material = material3;
    };

    createscreenShootSphere(name: string, x: number, y: number) {
        this.screenSphere[this.playerIndex] = Mesh.CreateSphere(name, 32, 1, this.screenShootScene);
        this.screenSphere[this.playerIndex].position = new Vector3(-y, 0.65, x);
        var material3 = new StandardMaterial('material3', this.screenShootScene);
        material3.ambientTexture = new Texture('assets/images/blue-txture.jpg', this.screenShootScene);
        this.screenSphere[this.playerIndex].material = material3;
    };

    createOopSphere(name: string, x: number, y: number) {
        this.oopSphere[this.playerIndex] = Mesh.CreateSphere(name, 32, 1, this.oppScene);
        this.oopSphere[this.playerIndex].position = new Vector3(x, 0.5, y);
        var material4 = new StandardMaterial('material4', this.oppScene);
        material4.ambientTexture = new Texture('assets/images/blue-txture.jpg', this.oppScene);
        this.oopSphere[this.playerIndex].material = material4;
    };

    createscreenShootOopSphere(name: string, x: number, y: number) {
        this.oppscreenSphere[this.playerIndex] = Mesh.CreateSphere(name, 32, 1, this.oppscreenShootScene);
        this.oppscreenSphere[this.playerIndex].position = new Vector3(-y, 0.65, x);
        var material4 = new StandardMaterial('material4', this.oppscreenShootScene);
        material4.ambientTexture = new Texture('assets/images/blue-txture.jpg', this.oppscreenShootScene);
        this.oppscreenSphere[this.playerIndex].material = material4;
    };

    switched: boolean = false;
    pointerDown() {
        this.switched = !this.switched;
        if (this.switched) {
            this.addGizmo();
        } else {
            this.removeGizmo();
        }
    };
    //Add player moving axis
    addGizmo() {
        for (let i = 0; i < this.sphere.length; i++) {
            this.sphere[i].actionManager = new ActionManager(this.scene);
            this.sphere[i].actionManager.registerAction(
                new ExecuteCodeAction(ActionManager.OnPickTrigger, (event) => {
                    var pickedMesh = event.meshUnderPointer;
                    this.X_gizmo = new AxisDragGizmo(new Vector3(1, 0, 0), Color3.FromHexString("#ff0000"), this.utilLayer);
                    this.Z_gizmo = new AxisDragGizmo(new Vector3(0, 0, 1), Color3.FromHexString("#00ff00"), this.utilLayer);
                    this.X_gizmo.attachedMesh = pickedMesh;
                    this.Z_gizmo.attachedMesh = pickedMesh;

                    this.X_gizmo.updateGizmoRotationToMatchAttachedMesh = false;
                    this.X_gizmo.updateGizmoPositionToMatchAttachedMesh = true;
                    this.Z_gizmo.updateGizmoRotationToMatchAttachedMesh = false;
                    this.Z_gizmo.updateGizmoPositionToMatchAttachedMesh = true;


                    pickedMesh?.onAfterWorldMatrixUpdateObservable.add(() => {
                        // console.log('Name:' + pickedMesh?.name);
                        // console.log('X:' + pickedMesh?.position.x);
                        // console.log('Y:' + pickedMesh?.position.y);
                        // console.log('Z:' + pickedMesh?.position.z);
                        let rm: any = pickedMesh?.getWorldMatrix();
                        let m: any = this.screenShootScene.getMeshByName("screen" + pickedMesh?.name);
                        //@ts-ignore
                        m.position.x = pickedMesh?.position.z * -1;
                        m.position.z = pickedMesh?.position.x;
                        let n: any = this.oppscreenShootScene.getMeshByName("screenoop" + pickedMesh?.name);
                        //@ts-ignore
                        n.position.x = pickedMesh?.position.z * -1;
                        //@ts-ignore
                        n.position.z = pickedMesh?.position.x * -1;
                    });
                })
            )
        }
    };
    //removing player moving axis
    removeGizmo() {
        if (this.X_gizmo) {
            this.X_gizmo.attachedMesh = null;
            this.Z_gizmo.attachedMesh = null;
        }
    };

    saveOppoFormation() {
        for (var i = 0; i < this.sphere.length; i++) {
            if (this.sphere[i] && this.sphere[i].position) {
                this.oopSphere[i].position = new Vector3(this.sphere[i].position.x * -1, 0.5, this.sphere[i].position.z);
            }
        }
    };

    owlcarousel1Options = {
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 4,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    };

    getPlaysName() {
        this.formationStackService.getFormationStackRelated(this.id).subscribe((resp) => {
            if (resp) {
                this.relatedVideos = resp.videos;
                this.relatedVideosCount = resp.videos.length;
                this.relatedImages = resp.images;
                this.relatedImagesCount = resp.images.length;

                this.defaultRelatedVideos.push(...resp.videos);
                this.defaultRelatedImages.push(...resp.images);
            }
            else {
                this.relatedVideos = [];
                this.relatedVideosCount = 0;
                this.relatedImages = [];
                this.relatedImagesCount = 0;
            }
        });
    };

    cancel() {
        this.router.navigate(['/offense-public/offense', { ref: this.refTab }]);
    };

    openViewModal(data: any) {
        this.modalData = data;
        this.modalService.open(this.videoViewcontent, { centered: true, size: "xl" });
    };

    handleVideoEnded(event: Event) {
        const videoElement: HTMLVideoElement = event.target as HTMLVideoElement;
        if (videoElement) {
            videoElement.playbackRate = 0.25;
            videoElement.play();
        }
    };

    loadMore() {
        let firstObj = this.defaultRelatedImages[0];
        if (firstObj != null) {
            //var index = this.relatedImages.length + this.relatedVideos.length;
            switch (firstObj.origin) {
                case "Plays":
                    this.loadMoreIconshow = true;
                    this.offensePublicService.getRelatedByPlays(firstObj.id, environment.publicAcCessPlayBookId).subscribe((resp: any) => {
                        if (resp) {
                            this.loadMoreIconshow = false;
                            //var newIndex: number = 0;
                            if (resp.images) {
                                this.relatedImages.push(...resp.images);
                                this.relatedImagesCount = this.relatedImagesCount + resp.images.length;

                                this.defaultRelatedImages.push(...resp.images);
                                //newIndex = resp.images.length;
                            }
                            if (resp.videos) {
                                this.relatedVideos.push(...resp.videos);
                                this.relatedVideosCount = this.relatedVideosCount + resp.videos.length;

                                this.defaultRelatedVideos.push(...resp.videos);
                                //newIndex = newIndex + resp.videos.length;
                            }

                            this.defaultRelatedImages.shift();
                        }
                    });
                    break;
                case "Fomation":
                    this.loadMoreIconshow = true;
                    this.formationService.getFormationRelated(firstObj.id).subscribe((resp: any) => {
                        if (resp) {
                            this.loadMoreIconshow = false;
                            //var newIndex: number = 0;
                            if (resp.images) {
                                this.relatedImages.push(...resp.images);
                                this.relatedImagesCount = this.relatedImagesCount + resp.images.length;

                                this.defaultRelatedImages.push(...resp.images);
                                //newIndex = resp.image.length;
                            }
                            if (resp.videos) {
                                this.relatedVideos.push(...resp.videos);
                                this.relatedVideosCount = this.relatedVideosCount + resp.videos.length;

                                this.defaultRelatedVideos.push(...resp.videos);
                                // = newIndex + resp.videos.length;
                            }

                            //this.activeSlideIndex = index - newIndex;

                            this.defaultRelatedImages.shift();
                        }
                    });
                    break;
                case "Concept":
                    this.loadMoreIconshow = true;
                    this.conceptService.getplaysName(firstObj.id).subscribe((resp: any) => {
                        if (resp) {
                            this.loadMoreIconshow = false;
                            if (resp.images) {
                                this.relatedImages.push(...resp.images);
                                this.relatedImagesCount = this.relatedImagesCount + resp.images.length;

                                this.defaultRelatedImages.push(...resp.images);
                            }
                            if (resp.videos) {
                                this.relatedVideos.push(...resp.videos);
                                this.relatedVideosCount = this.relatedVideosCount + resp.videos.length;

                                this.defaultRelatedVideos.push(...resp.videos);
                            }

                            this.defaultRelatedImages.shift();
                        }
                    });
                    break;
            }
        }
        // else {
        //     this.isImageLoadMoreShow = false;
        // } 
    };

    social_handels_url_share() {
        this.urlSharingService.ConvertIntoTinyUrl(window.location.href).subscribe(resp => {
            if (resp) {
                this.shareUrl = resp.response
                this.whatsAppshareUrl = "https://web.whatsapp.com/send?text=" + this.formationStack?.formationSetName + ". Hey! this is Strongside formation link, Please Click to View. " + this.shareUrl;
                this.instagramShareUrl = "https://api.instagram.com/oembed?url=" + this.formationStack?.formationSetName + ". Hey! this is Strongside formation link, Please Click to View " + this.shareUrl;
                this.twitterShareUrl = "https://twitter.com/intent/tweet?url=" + this.formationStack?.formationSetName + ". Hey! this is Strongside formation link, Please Click to View " + this.shareUrl;

                this.modalService.open(this.shareModal, { centered: true });
            }
            else {
                this.toster.error("Something went wrong");
            }
        });
    };

    copyInputMessage(inputElement: any) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
        this.toster.info("link copied to clipboard");
    };
}
