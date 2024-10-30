import Paper from "@/app/ui/paper/paper";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    
    const isRecommendingPaper = true;  // Change later

    return (
        <>
            <Paper
                name="Effect of Chipotle on Obesity in the United States"
                isRecommended={isRecommendingPaper} />
        </>
    )
}