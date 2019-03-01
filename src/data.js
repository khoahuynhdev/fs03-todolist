// Chú ý: 
// membersID: 
// Priority -->1: Cao, 2: Thấp, 3: Trung bình

const TasksData = [
    {
        id: new Date().getTime() + 1,
        name: "Soạn ReactJS",
        labelArr: ["Frontend", "Backend"],
        priority: 1, 
        memberIDArr: ["user_2"],
        status: 2, 
        description: "Phải soạn ReactJS kèm với NodeJS và Redux"
    },
    {
        id: new Date().getTime() + 2,
        name: "Dạy AngularJS",
        labelArr: ["Frontend", "API"],
        priority: 2, 
        memberIDArr: ["user_4", "user_5"],
        status: 1,
        description: "Nội dung của Angular rất dài và khó"
    },
    {
        id: new Date().getTime() + 3,
        name: "Soạn Python",
        labelArr: ["Backend"],
        priority: 2, 
        memberIDArr: ["user_3", "user_5"],
        status: 1,
        description: "Soạn python phải tập trung vào game và giải quyết vấn đề"
    },
    {
        id: new Date().getTime() + 4,
        name: "Thi Hackathon",
        labelArr: ["Frontend", "Backend", "Issue"],
        priority: 3, 
        memberIDArr: ["user_2", "user_3", "user_4", "user_5"],
        status: 3,
        description: "Cuộc thi đòi hỏi tư duy và kỹ năng coding"
    },
]

export default TasksData;