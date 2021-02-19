export interface Student {
    studentId: number;
    studentName: string;
}

export interface TimetableEntry {
    id: number;
    timetableElementId: number;
    holidayId: number;
    blockId: any[];
    blockTeacherId: any[];
    blockClassId: any[];
    blockRoomId: any[];
    modId: number;
    periodId: number;
    start: string;
    end: string;
    lessonDate: string;
    lessonStart: string;
    lessonEnd: string;
    lessonDuration: string;
    nbrOfModifiedLessons?: any;
    connectedId?: any;
    isAllDay: number;
    timetableEntryTypeId: number;
    timetableEntryType: string;
    timetableEntryTypeLong: string;
    timetableEntryTypeShort: string;
    messageId: number;
    message?: any;
    output?: any;
    title: string;
    halfClassLesson?: any;
    courseId: number;
    courseName: string;
    course: string;
    courseLong: string;
    isExamLesson: boolean;
    isCheckedLesson: boolean;
    lessonAbsenceCount: number;
    subjectId: number;
    subjectName: string;
    timegridId: number;
    classId: number[];
    className: string;
    profileId: string;
    teamId: string;
    teacherId: number[];
    teacherAcronym: string;
    teacherFullName: string[];
    teacherLastname: string;
    teacherFirstname: string;
    connectedTeacherId: any[];
    connectedTeacherFullName: any[];
    student: Student[];
    studentId: any[];
    studentFullName: string;
    studentLastname: string;
    studentFirstname: string;
    roomId: number[];
    roomName: string;
    locationDescription: string;
    resourceId: any[];
    timetableClassBookId: number;
    hasHomework: boolean;
    hasHomeworkFiles: boolean;
    hasExam: boolean;
    hasExamFiles: boolean;
    privileges?: any;
    resource?: any;
    reservedResources: number;
    totalStock: number;
    school: string;
    relatedId: string[];
}

export interface Timetable {
    status: number;
    data: TimetableEntry[];
}

