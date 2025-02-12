import { defineStore } from 'pinia';

export const useDepartementStore = defineStore('departementStore', {
    state: () => {
        return {
            departements: [],
            searchQuery: ''
        }
    },
    getters: {
        filteredDepartements: (state) => {

            const query = state.searchQuery?.trim().toLowerCase() ?? ''


            if (!query || query.length === 0) {
                return state.departements
            }

            return state.departements.filter(dept =>
                dept.departmentName.toLowerCase().includes(query)
            )
        },
        getDepartementByName: (state) => (name) => {
            return state.departements.find(
                departement => departement.departmentName.toLowerCase() === name.toLowerCase()
            );
        }
    },
    actions: {
        addDepartement(departement) {
            this.departements = [...this.departements, departement];

        },

        setSearchQuery(query) {
            this.searchQuery = query ?? ''
        },

        init() {

            this.departements = [
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
                    "description": "Lorem ipsum dolor sit amet consectetur. Ante etiam viverra pretium aliquam."
                },
                {
                    "departmentName": "Pro Property Maintenance",
                    "description": "Lorem ipsum dolor sit amet consectetur. Auctor auctor omare sagittis et."
                },
                {
                    "departmentName": "Sofa Express",
                    "description": "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris mauris et porta elit montes sit."
                },
                {
                    "departmentName": "Total Network Development",
                    "description": "Lorem ipsum dolor sit amet consectetur. Vestibulum dui tellus aliquam commodo."
                },
                {
                    "departmentName": "Giant",
                    "description": "Lorem ipsum dolor sit amet consectetur. At molestie et ligula consectetur augue condimentum enim pharetra."
                },
                {
                    "departmentName": "Murray's Discount Auto Stores",
                    "description": "Lorem ipsum dolor sit amet consectetur. Odio elit tortor faucibus semper."
                }
            ];
        },

        dispachDepartementByName(name) {

            return this.departements.find(departement => departement.name === name);
        },

        refresh() {

            return this.departements;
        },
        deleteDepartement(departement) {
            const index = this.departements.findIndex(dept => 
                dept.departmentName === departement.departmentName && 
                dept.description === departement.description
            );
            if (index !== -1) {
                this.departements.splice(index, 1);
            }
        }
    }
});
