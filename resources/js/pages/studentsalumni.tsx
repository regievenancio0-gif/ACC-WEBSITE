import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';

export default function Studentsalumni() {
    return (
        <>
            <Head title="Students & Alumni" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <h1>Kahot</h1>
            </div>
        </>
    );
}

Studentsalumni.layout = {
    breadcrumbs: [
        {
            title: 'Students & Alumni',
            href: '/studentsalumni',
        },
    ],
};
