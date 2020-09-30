const admin = require('firebase-admin');
const uuid = require('uuid').v4;
admin.initializeApp();

const db = admin.firestore();

const populateDummyData = async () => {
    await initializeUser('dummy-user', 'John Smith', 'dummy-section', 'dummy-course-section', 'dummy-work-section');
};

const initializeUser = async (userId, displayName, projectSectionId=uuid(), courseSectionId=uuid(), workSectionId=uuid()) => {
    const content1Id = uuid();
    const content2Id = uuid();
    const content3Id = uuid();
    try {
        await db.collection("users").doc(userId).set(Object.assign({}, userTemplate, {
            displayName,
            sections: [projectSectionId, courseSectionId, workSectionId]

        }));
        await db.collection("sections").doc(projectSectionId).set(Object.assign({}, sectionTemplate, {
            title: "Projects",
            contents: [content1Id]
        }));
        await db.collection("sections").doc(courseSectionId).set(Object.assign({}, sectionTemplate, {
            title: "Education",
            contents: [content2Id],
            special: true
        }));
        await db.collection("sections").doc(workSectionId).set(Object.assign({}, sectionTemplate, {
            title: "Work Experience",
            contents: [content3Id],
            special: true
        }));

        await db.collection("sectionContents").doc(content1Id).set(Object.assign({}, contentTemplate, {
            title: "Robot car project",
            userId, sectionId: projectSectionId
        }));
        await db.collection("sectionContents").doc(content2Id).set(Object.assign({}, contentTemplate, {
            title: "Bachelor of Science, Monsters University",
            userId, sectionId: courseSectionId
        }));
        await db.collection("sectionContents").doc(content3Id).set(Object.assign({}, contentTemplate, {
            title: "Engineer, Monsters Inc.",
            userId, sectionId: workSectionId
        }));
    }
    catch (e) {
        console.log(e);
    } 
}

const userTemplate= {
    displayName: "",
    profileImg: "",
    tagline: "University of Melbourne",
    about: "I'm a student at the university of melbourne",
    sections: [],
    chats: []
}

const sectionTemplate = {
    title: "Projects",
    contents: []
}


const contentTemplate = {
    userId: '',
    sectionId: '',
    thumbnailUrl: '',
    squareThumbnailUrl: '',
    title: '',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque viverra justo nec ultrices. Penatibus et magnis dis parturient montes nascetur. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Pulvinar proin gravida hendrerit lectus a. Arcu non odio euismod lacinia at. Gravida cum sociis natoque penatibus et magnis dis. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Elit at imperdiet dui accumsan sit amet nulla facilisi. Scelerisque felis imperdiet proin fermentum leo. Vehicula ipsum a arcu cursus. Euismod in pellentesque massa placerat. Nec nam aliquam sem et tortor consequat id porta. Sit amet risus nullam eget felis eget nunc lobortis mattis. Mi eget mauris pharetra et.",
    artefacts: []
}

const dummyContent = {
    title: "My Awesome Project",
    thumbnailUrl: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque viverra justo nec ultrices. Penatibus et magnis dis parturient montes nascetur. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Pulvinar proin gravida hendrerit lectus a. Arcu non odio euismod lacinia at. Gravida cum sociis natoque penatibus et magnis dis. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Elit at imperdiet dui accumsan sit amet nulla facilisi. Scelerisque felis imperdiet proin fermentum leo. Vehicula ipsum a arcu cursus. Euismod in pellentesque massa placerat. Nec nam aliquam sem et tortor consequat id porta. Sit amet risus nullam eget felis eget nunc lobortis mattis. Mi eget mauris pharetra et.",
    artefacts: ["dummy-artefact"]
}

const artefactTemplate = {
    userId: "",
    contentId: "",
    fileName: "Artefact.png",
    fileUrl: "https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_57_2560_1536/master/2560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0f65e142d72b44c837382331ecbaaa51"
}


exports.populateDummyData = populateDummyData;
exports.initializeUser = initializeUser;

