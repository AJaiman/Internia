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
                        type: "Associate Professor",
                        description: `
                        Eric Huang is a professor at UMD who is very passionate about computer science. This is a description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        `
                    }
                } />
        </>
    )
}