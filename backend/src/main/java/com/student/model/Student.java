package com.student.model;

import jakarta.persistence.*;

@Entity

@Table(name = "students")

public class Student {

    @Id

    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private Long id;

    private String studentName;

    private String email;

    private String phone;

    private String schoolName;

    private String competitionCategory;

    public Student() {

    }

    public Long getId() {

        return id;

    }

    public void setId(Long id) {

        this.id = id;

    }

    public String getStudentName() {

        return studentName;

    }

    public void setStudentName(
            String studentName
    ) {

        this.studentName = studentName;

    }

    public String getEmail() {

        return email;

    }

    public void setEmail(String email) {

        this.email = email;

    }

    public String getPhone() {

        return phone;

    }

    public void setPhone(String phone) {

        this.phone = phone;

    }

    public String getSchoolName() {

        return schoolName;

    }

    public void setSchoolName(
            String schoolName
    ) {

        this.schoolName = schoolName;

    }

    public String getCompetitionCategory() {

        return competitionCategory;

    }

    public void setCompetitionCategory(
            String competitionCategory
    ) {

        this.competitionCategory =
                competitionCategory;

    }

}