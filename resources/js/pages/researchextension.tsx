import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';

export default function Researchextension() {
    return (
        <>
            <Head title="Research & Extension" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1>Kahot</h1>
                
            </div>
        </>
    );
}

Researchextension.layout = {
    breadcrumbs: [
        {
            title: 'Research & Extension',
            href: '/researchextension',
        },
    ],
};
