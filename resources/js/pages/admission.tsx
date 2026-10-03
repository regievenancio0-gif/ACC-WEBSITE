import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';

export default function Admission() {
    return (
        <>
            <Head title="Admission" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1>Kahot</h1>
            </div>
        </>
    );
}

Admission.layout = {
    breadcrumbs: [
        {
            title: 'Admission',
            href: '/admission',
        },
    ],
};
