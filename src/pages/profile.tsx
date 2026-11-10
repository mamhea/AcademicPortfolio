import { SiGithub, SiInstagram } from "react-icons/si";
import { profile } from "../data/profile";

import "./Profile.css";

function Profile() {
  return (
    <main className="profile-page">
      <div className="profile-container">
        <section className="profile-header">
          <div className="profile-avatar">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={`${profile.name} 的個人頭像`}
              />
            ) : (
              <span>{profile.name.charAt(0)}</span>
            )}
          </div>

          <div className="profile-heading">
            <p className="profile-eyebrow">
              PERSONAL PROFILE
            </p>

            <h1>{profile.name}</h1>

            {profile.englishName && (
              <p className="profile-english-name">
                {profile.englishName}
              </p>
            )}

            <p className="profile-title">
              {profile.title}
            </p>
          </div>
        </section>

        <section className="profile-introduction">
          <h2>關於我</h2>
          <p>{profile.introduction}</p>
        </section>

        {profile.location && (
          <section className="profile-location">
            <h2>所在地</h2>
            <p>{profile.location}</p>
          </section>
        )}

        {profile.socialLinks &&
          profile.socialLinks.length > 0 && (
            <section className="profile-social">
              <h2>社群連結</h2>

              <div className="profile-social-links">
                {profile.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon === "github" && (
                      <SiGithub size={18} aria-hidden="true" />
                    )}

                    {link.icon === "instagram" && (
                      <SiInstagram size={18} aria-hidden="true" />
                    )}
                    &nbsp;
                    {link.name}
                  </a>
                ))}
              </div>
            </section>
          )}
      </div>
    </main>
  );
}

export default Profile;
