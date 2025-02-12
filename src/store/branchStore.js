import { defineStore } from 'pinia'

export const useBranchStore = defineStore('branchStore', {
    state: () => ({
        branches: [],
        searchQuery: '',
        departments: [],
        headOfBranchs: []
    }),
    getters: {
        filterdBranchs: (state) => {

            const query = state.searchQuery?.trim().toLowerCase() ?? ''


            if (!query || query.length === 0) {
                return state.branches
            }

            return state.branches.filter(branch =>
                branch.branchName.toLowerCase().includes(query)
            )
        }
    },
    actions: {
        setSearchQuery(query) {
            this.searchQuery = query ?? ''
        },
        init() {
            this.branches = [
                {
                    "branchName": "Jakarta Utara",
                    "relatedDepartment": "Johnson’s General Stores",
                    "address": "612 Shadowmar Drive, New Orleans, LA 70115",
                    "description": "Lorem ipsum dolor sit amet consectetur. In dictumst cenean as asda dasdkl asdakl asdalk askldkas daksldk  asdasdkjalsdasdsdad"
                },
                {
                    "branchName": "Jakarta Selatan",
                    "relatedDepartment": "Bugle Boy",
                    "address": "591 Joanne Lane, Wilmington, MA 01887",
                    "description": "Lorem ipsum dolor sit amet consectetur. Mattis hendrerit nec..."
                },
                {
                    "branchName": "Jakarta Barat",
                    "relatedDepartment": "Cut Rite Lawn Care",
                    "address": "4319 Wakefield Street, Philadelphia, PA 19126",
                    "description": "Lorem ipsum dolor sit amet consectetur. Viverra mauris leo si..."
                },
                {
                    "branchName": "Jakarta Timur",
                    "relatedDepartment": "J. Brannam",
                    "address": "199 Oakway Lane, Woodland Hills, CA 91303",
                    "description": "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper si..."
                },
                {
                    "branchName": "Jakarta Pusat",
                    "relatedDepartment": "Cala Foods",
                    "address": "4267 Cherry Tree Drive, Jacksonville, FL 32216",
                    "description": "Lorem ipsum dolor sit amet consectetur. Ante etiam viverra p..."
                },
                {
                    "branchName": "Depok",
                    "relatedDepartment": "Rink’s",
                    "address": "1341 Poplar Street, Chicago, IL 60606",
                    "description": "Lorem ipsum dolor sit amet consectetur. Auctor auctor ornar..."
                },
                {
                    "branchName": "Bogor",
                    "relatedDepartment": "Cut Rite Lawn Care",
                    "address": "417 Electown Road, New York, NY 10018",
                    "description": "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris..."
                },
                {
                    "branchName": "Tangerang",
                    "relatedDepartment": "Ezhe Source",
                    "address": "184 Griffin Street, Gilbert, AZ 85233",
                    "description": "Lorem ipsum dolor sit amet consectetur. Vestibulum dui tellu..."
                },
                {
                    "branchName": "Bekasi",
                    "relatedDepartment": "Western Auto",
                    "address": "2900 Ritter Street, Huntsville, AL 35802",
                    "description": "Lorem ipsum dolor sit amet consectetur. At molestie et ligula..."
                },
                {
                    "branchName": "Kepulauan Seribu",
                    "relatedDepartment": "Super Duper",
                    "address": "1456 Veltri Drive, Anchorage, AK 99502",
                    "description": "Lorem ipsum dolor sit amet consectetur. Odio elit tortor fauci..."
                }
            ],

                this.departments = [
                    {
                        "departmentName": "Specialty Restaurant Group",
                        "description": "Lorem ipsum dolor sit amet consectetur. In dictumst cenean eu sit adipiscing."
                    },
                    {
                        "departmentName": "Stratacard",
                        "description": "Lorem ipsum dolor sit amet consectetur. Mattis hendrerit nec donec quam curabitur ut pretium."
                    },
                    {
                        "departmentName": "Finast",
                        "description": "Lorem ipsum dolor sit amet consectetur. Viverra mauris leo sit quam venenatis pharetra ullamcorper."
                    },
                    {
                        "departmentName": "Auto Works",
                        "description": "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper sit vestibulum duis magna."
                    },
                    {
                        "departmentName": "Cut Rite Lawn Care",
                        "description": "Lorem ipsum dolor sit amet consectetur. Ante etiam viverra pharetra."
                    },
                ],
                this.headOfBranchs = [
                    {
                        "id": 1,
                        "name": "John Doe"
                    },
                    {
                        "id": 2,
                        "name": "Jane Smith"
                    },
                    {
                        "id": 3,
                        "name": "Robert Johnson"
                    },
                    {
                        "id": 4,
                        "name": "Emily Davis"
                    },
                    {
                        "id": 5,
                        "name": "Michael Brown"
                    },
                    {
                        "id": 6,
                        "name": "Sarah Wilson"
                    },
                    {
                        "id": 7,
                        "name": "David Martinez"
                    },
                    {
                        "id": 8,
                        "name": "Laura Anderson"
                    },
                    {
                        "id": 9,
                        "name": "James Thomas"
                    },
                    {
                        "id": 10,
                        "name": "Patricia White"
                    }
                ]
        },
        addBranch(branch) { 
            this.branches.push(branch)
        },
        deleteBranch(branch){
            this.branches.splice(this.branches.indexOf(branch), 1)
        }
    }
})