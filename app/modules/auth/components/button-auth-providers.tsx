import { Form } from "react-router";
import { Button } from "@/components/ui/button";
import { configSite } from "@/lib/config/site";

export function ButtonAuthProviders({ textAction }: { textAction: string }) {
  return (
    <>
      {configSite.authProviders
        .filter((provider) => provider.isEnabled !== false)
        .map((provider) => {
          const Icon = provider.icon;
          return (
            <Form action="/action/social" key={provider.name} method="post">
              <input name="provider" type="hidden" value={provider.name} />
              <Button className="w-full" variant="secondary">
                <Icon />
                <span>
                  {textAction} with {provider.label}
                </span>
              </Button>
            </Form>
          );
        })}
    </>
  );
}
