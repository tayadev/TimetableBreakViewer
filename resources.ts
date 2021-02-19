export interface Course {
    course: string;
    courseId: number;
    courseShort: string;
    courseShortWithClasses: string;
    periodId: number;
    teacherName: string;
    studentName: string;
    subjectId: number;
    teacherId: number[];
    studentId: number[];
    classId: number[];
    className: string[];
}

export interface Student {
    personId: number;
    name: string;
}

export interface Teacher {
    personId: number;
    name: string;
    acronym: string;
    occupied: number;
}

export interface Class {
    classId: number;
    className: string;
    classShort: string;
    classCommonName: string;
    periodId: number;
    classLevel: string;
    occupied: number;
}

export interface Room {
    roomId: number;
    room: string;
    description: string;
    occupied: number;
    sort1: string;
    sort2: string;
    roomCategory: string;
    building: string;
}

export interface ResourcesData {
    courses: Course[];
    students: Student[];
    teachers: Teacher[];
    classes: Class[];
    rooms: Room[];
    resources: any[];
}

export interface Resources {
    data: ResourcesData;
}