import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Card } from '@/components/ui/card';

export default function About() {
    return (
        <>
            <Head title="About" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                  
                </div>
                <div><b>About Page</b></div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full " />

                   



                    <div className='py-3 px-3 text-justify'><b>ACC OFFICIAL SEAL</b></div>
                    <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
                            <img src="acclogo.png" alt="ACC OFFICIAL SEAL" />


                            <Card>
                                <div className='py-3 px-3 text-justify'><b>ACC OFFICIAL SEAL</b></div>
                                    <div><p>
                                        Since its founding on 1979, <b>Abuyog Community College</b> has striven to provide students the knowledge, values, skills, and community involvement to enable them to excel as the forefront manpower of community and of the global arena. ACC aims for the creation of a scholastic environment composed of individuals that are grounded in faith, integrity, respect and trust.
                                        
                                        </p></div>
                                    
                                    <div>The School LOGO:<p>
                                        

                                        <b>Laurel Wreath</b>(Green) – a symbol of victory and honor. It symbolizes ACC’s triumph against ignorance and success in the search for truth and knowledge.
                                        
                                        </p></div>
                                    <div>
                                        <p><b>Torch</b> – an emblem of enlightenment and hope. It symbolizes the vision of ACC to provide light as a source of enlightenment to all students.</p>
                                    </div>
                                    <div>
                                        <p><b>Scrolls</b> – an emblem of wisdom. It symbolizes translating academic work into meaningful presentations of expertise and scholarly work.</p>
                                    </div>
                                    <div>
                                        <p><b>Quill Pen and Ink</b> – an instrument for writing which symbolizes freedom and independence to soar and be able to look at things from a wider perspective.</p>
                                    </div>
                                    <p><b>Bee</b> – symbol for the Municipality of Abuyog, and;</p>
                                   <p><b>1979</b> the year the college was established.</p>
                            </Card >
                        
                            <Card>
                                <Card>
                                    <div>
                                        <b>Transparancy Seal</b>
                                            <div className="image-container">
                                            <img src="https://accabuyog.com/home/wp-content/themes/gwt-wordpress-26.0.0/images/transparency-seal-160x160.png" alt="ACC CAMPUS" />
                                            </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div>
                                        <b>Freedom Information</b>
                                            <div className="image-container">
                                                <img src="https://accabuyog.com/home/wp-content/themes/gwt-wordpress-26.0.0/images/foi-logo-160x160.png" alt="Freedome LOGO" />
                                            </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div>
                                        <b>My ACC</b>
                                        <div>
                                            <img src="accmap.png" alt="ACC CAMPUS" />
                                        </div>
                                    </div>
                                </Card>
                            </Card>
                            
                    </div>
                        

                            
                        



















                </div>

         
               
             
                       
                           
                        










            </div>
            
        </>
    );
}

About.layout = {
    breadcrumbs: [
        {
            title: 'About',
            href: '/about',
        },
    ],
};