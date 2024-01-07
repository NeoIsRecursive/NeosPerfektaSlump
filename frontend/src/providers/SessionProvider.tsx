import { supabase } from "@/api/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { Session } from "@supabase/supabase-js";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type SessionContext = {
  session: Session | null;
  logout: () => void;
};

export const SessionContext = createContext<SessionContext>({
  session: null,
  logout: () => {},
});

export const useSession = () => {
  const context = useContext(SessionContext);

  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return context;
};

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) return null;

  return (
    <SessionContext.Provider
      value={{
        session,
        logout: handleLogout,
      }}
    >
      {session ? (
        children
      ) : (
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-2xl font-bold mb-4">Slump</h1>
          <Auth
            supabaseClient={supabase}
            providers={[]}
            theme="default"
            appearance={{ theme: ThemeSupa }}
          />
        </div>
      )}
    </SessionContext.Provider>
  );
};
