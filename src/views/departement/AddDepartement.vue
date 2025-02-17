<template>
    <div class="bg-white rounded-xl max-w-screen-md mx-auto py-4 border border-natural200">
        <form @submit.prevent="handleSubmit">
            <div class="px-6">
                <div class="text-center">
                    <h1 class="text-body text-textPrimary">Add New Department</h1>
                    <h1 class="text-content text-textScondary pt-3">Create a new department for content management system
                    </h1>
                </div>
                <div class="py-3">
                    <h1 class="text-content text-textPrimary pb-2">Department Name</h1>
                    <div class="">
                        <TextField 
                            hint="Input department name" 
                            v-model="formData.departmentName"
                            :error="v$.departmentName.$error"
                            :error-message="v$.departmentName.$errors[0]?.$message"
                        />
                    </div>
                </div>
                <div class="py-3">
                    <h1 class="text-content text-textPrimary pb-2">Department Description</h1>
                    <div class="">
                        <TextArea 
                            hint="Input department description" 
                            v-model="formData.description"
                            :error="v$.description.$error"
                            :error-message="v$.description.$errors[0]?.$message"
                        />
                    </div>
                </div>
            </div>
            <div class="horizontal-divider"></div>
            <div class="flex flex-col md:flex-row justify-center py-4 px-6 gap-4 mx-auto max-w-screen-xl">
                <ButtonForm 
                    title="Cancel" 
                    type="outline-border" 
                    class="w-full md:w-[232px]" 
                    @click="backToDepartment" 
                />
                <ButtonForm 
                    title="Add New Department" 
                    class="w-full md:w-[232px]" 
                    type="block"
                    :loading="isSubmitting"
                />
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeMount, onActivated } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, maxLength } from '@vuelidate/validators';
import TextField from '@/components/TextField.vue';
import TextArea from '@/components/TextArea.vue';
import ButtonForm from '@/components/ButtonForm.vue';
import { useDepartementStore } from '@/store/departementStore';

const router = useRouter();
const departmentStore = useDepartementStore();
const isSubmitting = ref(false);

// Form data
const formData = reactive({
    departmentName: '',
    description: ''
});

const initialFormState = {
    departmentName: '',
    description: ''
};

// Validation rules
const rules = {
    departmentName: { 
        required, 
        minLength: minLength(3),
        maxLength: maxLength(50)
    },
    description: { 
        required,
        minLength: minLength(10),
        maxLength: maxLength(500)
    }
};

// Initialize vuelidate
const v$ = useVuelidate(rules, formData);

const backToDepartment = () => {
    router.back();
};

const resetForm = () => {
    // Reset form data to initial state
    Object.assign(formData, initialFormState);
    // Reset validation state
    v$.value.$reset();
};

const handleSubmit = async () => {
    try {
        // Validate form
        const isValid = await v$.value.$validate();
        if (!isValid) return;

        isSubmitting.value = true;

        // Submit form
        await departmentStore.addDepartement({
            departmentName: formData.departmentName,
            description: formData.description
        });
        backToDepartment();

        // Reset form
        resetForm();
    } catch (error) {
        console.error('Error adding department:', error);
    } finally {
        isSubmitting.value = false;
    }
};

onActivated(() => {
    resetForm();
})

</script>