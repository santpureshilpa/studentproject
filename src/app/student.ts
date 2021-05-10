export class Student {
    courseId:number;
    studentId:number;
    firstName:string;
    lastName:string;
    gender:string;
    semester:number;
    mobileNumber:number;
    emailId:string;
    fatherEmailId:string;
    fatherMobileNumber:number;
    dateOfBirth:Date;

    constructor(courseId:number,studentId:number,firstName:string,lastName:string, gender:string,semester:number,
         mobileNumber:number,emailId:string,fatherEmailId:string,fatherMobileNumber:number,dateOfBirth:Date,
         ){
         
        this.courseId=courseId;
          this.studentId=studentId;
           this.firstName=firstName;
           this.lastName=lastName;
           this.gender=gender;
           this.semester=semester;
           this.mobileNumber=mobileNumber;
           this.emailId=emailId;
           this.fatherEmailId=fatherEmailId;
           this.fatherMobileNumber=fatherMobileNumber;
           this.dateOfBirth=dateOfBirth;
           
 
 

    }
}
          
    

