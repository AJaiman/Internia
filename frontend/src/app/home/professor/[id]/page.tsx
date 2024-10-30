import ProfessorCard from "@/app/ui/professor/professor-card";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    return (
        <>
            <ProfessorCard 
                professor={
                    { 
                        name: "Eric Huang", 
                        university: "UMD",
                        match: 0.97, 
                        fullUniversity: "University of Maryland",
                        department: "Computer Science",
                        type: "Associate Professor"
                    }
                } />
        </>
    )
}