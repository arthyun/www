<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'heen3316');

/** MySQL database username */
define('DB_USER', 'heen3316');

/** MySQL database password */
define('DB_PASSWORD', 'thsgusgh93!');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Sc}6mM8LqV%JF7Gt13*YQT1e:mft_|27X$j8F0H-q{QHo{r|c7>pKT/-&>1emlD_');
define('SECURE_AUTH_KEY',  'i+[w?TW_J,Dko5l,|WrK7fXb+;6]LI$ex?XjCvmAWg<jj2VvjQAcyA!=LlqGr=II');
define('LOGGED_IN_KEY',    '`--07,c]$H;DA)qaXFe4zlXSI1eLB_x[B#YcND!Bz/w6`h9b1!hi_Tp4t1*^eM{i');
define('NONCE_KEY',        '~j&:=~Yw0zCdvG@<WQjCz-/dxi1h{I+&-ZgG6#]k,pB/l)oeRV;,=S2nW=L!yQww');
define('AUTH_SALT',        '8KpNWLG$w5]uYYug6?(]ZGuyRd?=p;7A+r$(w*(C_$(X#QA3t29V0k`v#I8EG$Vt');
define('SECURE_AUTH_SALT', '+;zZAbWR6~,;A9(jU>v-;$3JHxJ6NyoL-*!+snAxXO1hT%qL1D?G7x/?/1>Z@sm(');
define('LOGGED_IN_SALT',   'aGBs>oTeImC^cB>%Eyz4>B0Mb:ZhkSHTa6Od/bUpN<ogb_8&faWYvOs]gOMeM!iY');
define('NONCE_SALT',       '/&KnG!X1h0IELPfAits%9qgfRLI7vvIWNi2)f.`J,II~$w!HN>yU2(~^w3^<D)fJ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
