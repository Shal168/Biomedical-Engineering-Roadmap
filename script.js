const roadmapData = [
    {
        semester: "Semester 1",
        courses: [
            { name: "Calculus ", credits: 4 },
            { name: "Engineering Chemistry", credits: 3 },
            { name: "Programming for problem solving ", credits: 3 },
            { name: "English for Communication", credits: 3 },
            { name: "Programming for problem solving ", credits: 3 },
            { name: "Engineering graphics", credits: 3 },
            { name: "Chemistry laboratory", credits: 2 },
            { name: "Computer practices laboratory", credits: 2 }
        ]
    },
    {
        semester: "Semester 2",
        courses: [
            { name: "Linear algebra and ordinary differential equations", credits: 4 },
            { name: "English for communication II", credits: 3},
            { name: "Engineering physics", credits: 3 },
            { name: "Basic electrical and electronics engineering", credits: 3 },
            { name: "Basic civil and mechanical engineering", credits: 3 },
            { name: "Electric circuit theory", credits: 3 },
            { name: "Heritage of tamils", credits: 3 },
            { name: "Engineering practices laboratory", credits: 2 },
            { name: "Physics laboratory", credits: 2 }
        ]
    },
    {
        semester: "Semester 3",
        courses: [
            { name: " Transform and partial differential equations", credits:4 },
            { name: "Anatomy and human physiology", credits:3  },
            { name: "Bio sensors and measurement devices", credits:3  },
            { name: "Fundamentals of bio chemistry", credits:3 },
            { name: "Digital system design", credits:3  },
            { name: "Electron devices and circuits", credits:3 },
            { name: "Tamils and technology", credits:1  },
            { name: "Bio sensors and measurement laboratory", credits:1  },
            { name: "Bio chemistry and human physiology laboratory", credits:1 },
            { name: "Electron devices and circuits laboratory", credits:1  }
        ]
    },
    {
        semester: "Semester 4",
        courses: [
            { name: "Probability and statistics", credits: 4 },
            { name: "Medical physics", credits: 3 },
            { name: "Data structures", credits: 3 },
            { name: "Signals and systems", credits: 3 },
            { name: "Linear integrated circuits", credits: 3},
            { name: "Pathology and microbiology ", credits: 3 },
            { name: "Analog and linear integrated circuits laboratory", credits: 1},
            { name: "Data structures laboratory", credits: 2 },
            { name: "Pathology and microbiology laboratory", credits: 1 },
        ]
    },
    {
        semester: "Semester 5",
        courses: [
            { name: "Bio control system", credits: 3 },
            { name: "Biomedical instrumentation", credits:3  },
            { name: "Machine learning techniques i medicine", credits:3  },
            { name: "Introduction to IoT", credits: 3 },
            { name: "Digital signal processing", credits:4  },
            { name: "Analog and digital communication", credits:3  },
            { name: "Communication skills laboratory", credits:1  },
            { name: "Biomedical instrumentation laboratory", credits: 2 },
            { name: "Digital signal processing laboratory", credits: 2 },
        ]
    },
    {
        semester: "Semester 6",
        courses: [
            { name: "Medical Imaging", credits: 4 },
            { name: "Biomedical Control Systems", credits: 3 },
            { name: "Tissue Engineering", credits: 4 },
            { name: "Medical Device Design", credits: 3 },
            { name: "Clinical Engineering", credits: 3 }
        ]
    },
    {
        semester: "Semester 7",
        courses: [
            { name: "Senior Design I", credits: 3 },
            { name: "Bioinformatics", credits: 3 },
            { name: "Medical Device Regulations", credits: 3 },
            { name: "Technical Elective I", credits: 3 },
            { name: "Biomedical Engineering Lab", credits: 2 }
        ]
    },
    {
        semester: "Semester 8",
        courses: [
            { name: "Senior Design II", credits: 3 },
            { name: "Technical Elective II", credits: 3 },
            { name: "Technical Elective III", credits: 3 },
            { name: "Professional Development", credits: 2 },
            { name: "Biomedical Engineering Seminar", credits: 1 }
        ]
    }
];

function createRoadmap() {
    const roadmapElement = document.getElementById('roadmap');
    
    roadmapData.forEach((semesterData, index) => {
        const semesterElement = document.createElement('div');
        semesterElement.className = 'semester';
        
        const totalCredits = semesterData.courses.reduce((sum, course) => sum + course.credits, 0);
        
        semesterElement.innerHTML = `
            <div class="semester-header">
                <span>${semesterData.semester}</span>
                <span>${totalCredits} Credits</span>
            </div>
            <div class="semester-content">
                ${semesterData.courses.map(course => `
                    <div class="course">
                        <span class="course-name">${course.name}</span>
                        <span class="credits">${course.credits} Credits</span>
                    </div>
                `).join('')}
                <div class="total-credits">
                    Total Semester Credits: ${totalCredits}
                </div>
            </div>
        `;
        
        roadmapElement.appendChild(semesterElement);
        
        // Add click event listener to toggle semester content
        const header = semesterElement.querySelector('.semester-header');
        const content = semesterElement.querySelector('.semester-content');
        
        header.addEventListener('click', () => {
            content.classList.toggle('active');
        });
    });
}

// Initialize the roadmap when the page loads
document.addEventListener('DOMContentLoaded', createRoadmap);